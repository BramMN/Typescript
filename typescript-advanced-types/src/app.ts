interface Admin {
  name: string
  priviliges: string[]
}

interface Employee {
  name: string
  startDate: Date
}

//interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: "Bram",
  priviliges: ["create-server"],
  startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number, b: string): string
function add(a: string, b: number): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add("Bram", "Job")
result.split(" ")

const fetchedUserData = {
  id: "u1",
  name: "Bram",
  job: { title: "CEO", description: "My own company" },
}

console.log(fetchedUserData?.job?.title)

// type UnknownEmployee = Employee | Admin

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name)
//   if ("priviliges" in emp) {
//     console.log("Priviliges: " + emp.priviliges)
//   }
//   if ("startDate" in emp) {
//     console.log("Starting Date: " + emp.startDate)
//   }
// }

// printEmployeeInformation({ name: "Job", startDate: new Date() })

// class Car {
//   drive() {
//     console.log("Driving...")
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...")
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount)
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
// }

// useVehicle(v1)
// useVehicle(v2)

// interface Bird {
//   type: "bird"
//   flyingSpeed: number
// }

// interface Horse {
//   type: "horse"
//   runningSpeed: number
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal) {
//   let speed
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed
//       break
//     case "horse":
//       speed = animal.runningSpeed
//   }
//   console.log("Moving at speed: " + speed)
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 })

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!
// // const userInputElement = document.getElementById("user-input")! as HTMLInputElement
// const userInputElement = document.getElementById("user-input")

// if (userInputElement) {
//   ;(userInputElement as HTMLInputElement).value = "Hi there"
// }

// interface ErrorContainer {
//   [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//   1: "Not a valid email",
//   username: "Must start with capital character",
// }
