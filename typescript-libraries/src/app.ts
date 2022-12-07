import "reflect-metadata"
import { plainToInstance } from "class-transformer"

import { Product } from "./product.model"
import { validate } from "class-validator"

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
]

const newProd = new Product("", -15.99)
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS:", errors)
  } else {
    console.log(newProd.getInformation())
  }
})

// const p1 = new Product("A book", 12.99)

// const loadedProducts = products.map(product => {
//   return new Product(product.title, product.price)
// })

const loadedProducts = plainToInstance(Product, products)

for (const prod of loadedProducts) {
  console.log(prod.getInformation())
}
