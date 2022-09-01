const http = require('http')

const server = http.createServer()

// will trigger every times the server loaded
server.on('request', (req, res)=>{
  console.log("welcome")
  res.write("welcome")
})

server.listen(5000, ()=>{
  console.log("server listening at port 5000...")
})