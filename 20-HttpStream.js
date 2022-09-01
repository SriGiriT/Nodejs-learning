const http = require('http')
const {createReadStream, readFileSync} = require('fs')


const server = http.createServer((req,res)=>{
  const fileStream = createReadStream('./content/bigData.txt', 'utf8')

  // data transfer as chunks as file stream
  fileStream.on('open', ()=>{
    fileStream.pipe(res)
  })
  fileStream.on('error', (err)=>{
    res.end(err)
  })

  // content length was very high 
  // const text = readFileSync('./content/bigData.txt', 'utf8')
  // res.end(text)
})

server.listen(5000, ()=>{
  console.log("Server listening at port 5000...")
})