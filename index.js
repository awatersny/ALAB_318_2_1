const indexRoutes = require("./routes/index");
const express = require("express")
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.static("./styles"))
  
app.engine("mobes", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if(err) return callback(err)
      
    const rendered = content.toString()
    .replaceAll("<%= title %>", options.title)
    .replace("<%= content %>", options.content)
    return callback(null, rendered)
  })
})
  
app.set("views", "./views")
app.set("view engine", "mobes")
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`)
})