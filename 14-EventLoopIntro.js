
// Fs was a async function by event loop 
const {readFile} = require('fs')

console.log("start")
readFile('./content/first.txt', 'utf8', (err, result)=>{
  if(err){
    console.log(err)
    return 
  }
  console.log(result)
  console.log("done with the task")
})

console.log("starting the next one")


// another eg for event loop 
// setTimeout 
console.log("first")
setTimeout(()=>{
  console.log("second")
}, 0)
console.log("third")


// setInterval 
setInterval(()=>{
  console.log("hello")
}, 1000)
console.log(`I will run first`)


// Server 
const http = require("http")

const server = http.createServer((req, res)=>{
  console.log("request event")
  res.end("hello world")
})

server.listen(5000, () => {
  console.log("Server is running on port 5000")
})