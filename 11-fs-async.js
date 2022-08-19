const { readFile , writeFile} = require('fs');
console.log("start")
readFile('./content/first.txt', 'utf8', (err, first) => {
    if(err){
        console.log(err)
        return
    }
    readFile('./content/second.txt', 'utf8', (err, second)=>{
        if(err){
            console.log(err)
            return
        }
        writeFile('./content/result.txt', `Here is the result of the two files: \n${first} \n${second}`, (err)=>{
            if(err){
                console.log(err)
                return
            }
            readFile('./content/result.txt', 'utf8', (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
                console.log("done with the task")
            })
        })
    })
})
console.log("starting the next one")
