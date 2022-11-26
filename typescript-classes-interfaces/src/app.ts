class Department {
  // private id: string
  // private name: string
  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    //this.id = "d2"
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, "IT")
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
  }

  addEmployee(name: string) {
    if (name === "Bram") {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment("d1", ["Bram"])

it.addEmployee("Bram")
it.addEmployee("Job")

//it.employees[2] = "Bart"

it.describe()
// it.name = "NEW NAME"
it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment("d2", [])

accounting.addReport("Something went wrong...")

accounting.addEmployee("Bram")
accounting.addEmployee("Job")

accounting.printReports()
accounting.printEmployeeInformation()

// const accountingCopy = { name: "DUMMY", describe: it.describe }

// accountingCopy.describe()
