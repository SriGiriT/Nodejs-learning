const {readFileSync, writeFileSync, read} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result.txt', `Here is the result of the two files: \n${first} \n${second}`)

writeFileSync('./content/result.txt', `\nThis was appended txt using append flag`, {flag:'a'})

console.log(`Here was the result file: \n${readFileSync('./content/result.txt', 'utf8')}`)

