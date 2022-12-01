function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const hookElement = document.getElementById(hookId)
    const person = new constructor()
    if (hookElement) {
      hookElement.innerHTML = template
      hookElement.querySelector("h1")!.textContent = person.name
    }
  }
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Bram"

  constructor() {
    console.log("Creating person object")
  }
}

const pers = new Person()

console.log(pers)
