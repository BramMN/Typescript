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
