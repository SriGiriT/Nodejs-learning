const express = require("express")
const { identity } = require("lodash")
const {products} = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require("morgan")

const app = express()
// app.use('/api', logger)  // can able to give paths
app.use([logger, authorize, morgan("tiny")])

app.get('/', (req, res)=>{
  console.log(req.user)
  res.send("Home")
})

app.get('/about', (req, res)=>{
  res.send("About")
})

app.get('/api/product', (req, res)=>{
  res.send("Product")
})

app.get('/api/items', (req, res)=>{
  res.send("Item")
})

// routes 
// app.get('/api/items',[logger, authorize], (req, res)=>{
//   res.send("Item")
// })


app.listen(5000, ()=>{
  console.log("listening...")
})