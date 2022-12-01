function Logger(logString: string) {
  console.log("LOGGER FACTORY")
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY")
  return function(constructor: any) {
    console.log("Rendering Template")
    const hookElement = document.getElementById(hookId)
    const person = new constructor()
    if (hookElement) {
      hookElement.innerHTML = template
      hookElement.querySelector("h1")!.textContent = person.name
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
