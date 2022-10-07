const http = require('http')
const {readFileSync, read} = require('fs')
const { resourceLimits } = require('worker_threads')

const homePage = readFileSync('./HttpBasics/navbar-app/index.html')
const stylePage = readFileSync('./HttpBasics/navbar-app/styles.css')
const logo = readFileSync('./HttpBasics/navbar-app/logo.svg')
const logics = readFileSync('./HttpBasics/navbar-app/browser-app.js')


const server = http.createServer((req, res)=>{
  if(req.url === '/home'){
    res.writeHead(200, {'content-type':'text/html'})
    res.write(homePage)
    res.end()
  }else if(req.url === '/styles.css'){
    res.writeHead(200, {'content-type':'text/css'})
    res.write(stylePage)
    res.end()
  }else if(req.url === '/browser-app.js'){
    res.writeHead(200, {'content-type':'text/javascript'})
    res.write(logics)
    res.end()
  }else if(req.url === '/logo.svg'){
    res.writeHead(200, {'content-type':'image/svg+xml'})
    res.write(logo)
    res.end()
  }else{
    res.writeHead(404)
    res.write("PageNotFound...")
    res.end()
  }
})

server.listen(5000, ()=>{
  console.log("listening...")
})