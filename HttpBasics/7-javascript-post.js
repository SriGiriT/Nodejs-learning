const express = require("express")
let {people} = require("./data")

const app = express()

app.use(express.static('./HttpBasics/methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.post("/login", (req, res)=>{
  const {name} = req.body
  if(name){
    console.log(name)
    res.send(`Welcome ${name}`)
  }else{
    res.status(401).send("Please provide Credentials...")
  }
})
app.post('/api/people', (req, res)=>{
  const {name} = req.body;
  if(!name){
    res.status(400).json({success:false, msg:"please provide name value"})
  }
  res.status(201).json({success:true, person:name})
})
app.get('/api/people', (req, res)=>{
  res.status(200).json({status:"success", data:people})
})


app.listen(5000, ()=>{
  console.log("listening...")
})