const EventEmitter = require('events');
const eventEmitter = new EventEmitter ();

eventEmitter.on('one', () => {
  console.log('First Event');
});
eventEmitter.on('two', () => {
    console.log('Second Event');
  });
  eventEmitter.on('three', () => {
    console.log('Third Event');
  });  

eventEmitter.emit('one');
eventEmitter.emit('two');
eventEmitter.emit('three');