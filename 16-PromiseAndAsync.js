const { readFile, writeFile } = require('fs').promises;

// . promises with fs to handle async and await 

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile('./content/result.txt', `Here is the result \n${first}\nand the second\n${second}`)
    console.log(first, second);
  }
  catch (err) {
    console.log(err);
  }
}
start()

// util promisify approach 

// const util = require('util');
// const readFilePromisify = util.promisify(readFile)
// const writeFilePromisify = util.promisify(writeFile)
// const start = async () => {
//   try {
//     const first = await readFilePromisify('./content/first.txt', 'utf8');
//     const second = await readFilePromisify('./content/second.txt', 'utf8');
//     await writeFilePromisify('./content/result.txt', `Here is the result \n${first}\nand the second\n${second}`)
//     console.log(first, second);
//   }
//   catch (err) {
//     console.log(err);
//   }
// }
// start()


// function implement to async await 

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result)
//       }
//     }
//     )
//   }
//   )
// }


// set promises 

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))


// Async await 

// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt');
//     console.log(first);
//   }
//   catch (err) {
//     console.log(err);
//   }
// }
// start()