const express = require("express")
const app = express()

app.get('/', (req, res)=>{
  console.log("user request the resources")
  res.status(200).send("Home page")
})

app.get('/about', (req, res)=>{
  res.status(200).send("About page")
})

app.all("*", (req, res)=>{
  res.status(404).send("Resource not available")
})

app.listen(5000, ()=>{
  console.log("listening...")
})