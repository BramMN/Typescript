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
