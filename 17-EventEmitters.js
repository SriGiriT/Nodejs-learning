const EventEmitter = require('events')

const customEmitters = new EventEmitter()

customEmitters.on('response', ()=>{
  console.log(`data received`)
})
customEmitters.on('response', (name, id)=>{
  console.log(`with parameters like \nname: ${name} \nId: ${id} `)
})
customEmitters.emit('response', "giri", "137")