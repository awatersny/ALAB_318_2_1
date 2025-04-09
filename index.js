const indexRoutes = require("./routes/index")
const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.static("./styles"))
app.use(express.static("./assets"))

app.use((req, res, next) => {
  console.log("User Request Time: ", Date.now())
  next()
})
  
app.set("views", "./views")
app.set("view engine", "ejs")
app.use("/", indexRoutes)

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`)
})