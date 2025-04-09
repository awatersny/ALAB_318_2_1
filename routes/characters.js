const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
  console.log("User Request Time: ", Date.now())
  next()
})

const sthChars = [
  {
    name: "Sonic",
    species: "hedgehog",
    colors: ["blue"]
  },
  {
    name: "Tais",
    species: "fox",
    colors: ["yellow", "white"]
  },
  {
    name: "Knuckles",
    species: "echidna",
    colors: ["red", "white"]
  },
  {
    name: "Shadow",
    species: "hedgehog",
    colors: ["black", "red", "white"]
  }
]