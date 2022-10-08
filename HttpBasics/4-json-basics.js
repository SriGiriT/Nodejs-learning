const express = require("express")
const { identity } = require("lodash")
const {products} = require('./data')


const app = express()

app.get('/api/product', (req, res)=>{
  res.json(products)
})

app.get('/api/product/min', (req, res)=>{
  const newProduct = products.map((product)=>{
    const {id, name, image} = product
    return {id, name, image}
  })
  res.json(newProduct)
})

// hard coded 
// app.get('/api/product/1', (req, res)=>{
//   const singleProduct = products.find((product) => product.id === 1)
//   res.json(singleProduct)
// })

app.get('/api/product/:ProductId', (req, res)=>{
  console.log(req)
  console.log(req.params.ProductId)
  const singleProduct = products.find((product) => product.id ===  Number(req.params.ProductId))
  if(!singleProduct){
    res.status(404).send("product doesn't exist")
  }else{
    console.log(singleProduct)
    res.json(singleProduct)
  }
})

// complex 
app.get('/api/product/:ProductId/reviews/:ReviewId', (req, res)=>{
  res.send("hello there!!!")
  console.log(req.params)
})

// query
app.get('/api/product/query', (req, res)=>{
  const {search, limit} = req.query
  console.log({search, limit})
  res.status(200).send("working")  
})

app.listen(5000, ()=>{
  console.log("listening...")
})