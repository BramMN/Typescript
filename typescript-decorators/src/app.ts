function Logger(logString: string) {
  console.log("LOGGER FACTORY")
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY")
  return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super()
        console.log("Rendering Template")
        const hookElement = document.getElementById(hookId)
        if (hookElement) {
          hookElement.innerHTML = template
          hookElement.querySelector("h1")!.textContent = this.name
        }
      }
    }
  }
}

@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Bram"

  constructor() {
    console.log("Creating person object")
  }
}

const pers = new Person()

console.log(pers)

//------

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!")
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("Method decorator!")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error("Invalid price - should be positive!")
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

const p1 = new Product("Book", 19)
const p2 = new Product("Book2", 29)

function AutoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this)
      return boundFunction
    },
  }
  return adjustedDescriptor
}

class Printer {
  message = "This works!"

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}

const printer = new Printer()
printer.showMessage()

const button = document.querySelector("button")!
button.addEventListener("click", printer.showMessage)

// -----

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {}

function MustHave(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), "required"],
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), "positive"],
  }
}

function Validate(obj: any) {
  const validatorConfig = registeredValidators[obj.constructor.name]
  if (!validatorConfig) {
    return true
  }
  let isValid = true
  for (const prop in validatorConfig) {
    for (const validator of validatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop]
          break
        case "positive":
          isValid = isValid && obj[prop] > 0
          break
      }
    }
  }
  return isValid
}

class Course {
  @MustHave
  title: string
  @PositiveNumber
  price: number

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const courseForm = document.querySelector("form")!
courseForm.addEventListener("submit", event => {
  event.preventDefault()
  const titleElement = document.getElementById("title") as HTMLInputElement
  const priceElement = document.getElementById("price") as HTMLInputElement

  const title = titleElement.value
  const price = +priceElement.value

  const createdCourse = new Course(title, price)

  if (!Validate(createdCourse)) {
    return alert("Invalid input, please try again")
  }
  console.log(createdCourse)
})
