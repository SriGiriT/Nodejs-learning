const express = require("express")
const { identity } = require("lodash")
const {products} = require('./data')


const app = express()

app.listen(5000, ()=>{
  console.log("listening...")
})