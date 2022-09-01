// Create big file
const {writeFileSync} = require('fs')

for(let i=1;i<=100000;i++){
  writeFileSync('./content/bigData.txt', `hello world ${i}\n`, {flag : 'a'})
}