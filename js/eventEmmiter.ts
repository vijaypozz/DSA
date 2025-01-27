const EventEmitter = require('events');
const chatEmitter = new EventEmitter();

// Listener for 'newMessage' event
chatEmitter.on('newMessage', (msg) => {
  console.log(`New message received: ${msg}`);
});

// Emitting an event when a message is sent
chatEmitter.emit('newMessage', 'Hello, how are you?');
