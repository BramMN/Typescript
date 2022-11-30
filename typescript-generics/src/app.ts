// const names: Array<string> = ["Bram", "Job"]
// names[0].split(" ")

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000)
// })

// promise.then(data => {
//   data.split(" ")
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB }
}

const mergedObj = merge({ name: "Bram", hobbies: ["Sports"] }, { age: 25 })
const mergedObj2 = merge({ name: "Bram" }, { age: 25 })

console.log(mergedObj)

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value"
  if (element.length === 1) {
    descriptionText = "Got 1 element"
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements"
  }
  return [element, descriptionText]
}

console.log(countAndDescribe([]))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key]
}

console.log(extractAndConvert({ name: "Bram" }, "name"))

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem("Bram")
textStorage.addItem("Job")
textStorage.removeItem("Bram")
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// const maxObj = { name: "Bram"}
// objStorage.addItem(maxObj)
// objStorage.addItem({ name: "Job" })

// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems())
