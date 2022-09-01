const {createReadStream} = require('fs')

// by default it have 64k of data
// highWaterMark to control the size 
const stream = createReadStream('./content/bigData.txt',{highWaterMark: 90000, encoding: 'utf8'})
stream.on('data', (result)=>{
  console.log(result)
})

stream.on('error', (err)=>{
  console.log(err)
})