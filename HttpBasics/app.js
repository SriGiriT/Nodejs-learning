const express = require("express")
let {people} = require("./data")

const app = express()

app.use(express.static('./HttpBasics/methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/api/people', (req, res)=>{
  const {name} = req.body;
  if(!name){
    res.status(400).json({success:false, msg:"please provide name value"})
  }
  res.status(201).json({success:true, person:name})
})

app.post('/api/postman/people', (req, res)=>{
  const {name} = req.body;
  if(!name){
    res.status(400).json({success:false, msg:"please provide name value"})
  }
  res.status(201).json({success:true, data:[...people, name]})
})

app.get('/api/people', (req, res)=>{
  res.status(200).json({status:"success", data:people})
})

app.put

app.listen(5000, ()=>{
  console.log("listening...")
})