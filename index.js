const express = require('express');
const EventEmitter = require('events');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// const stockEmitter = new EventEmitter();

// // Emit a stock price update every second
// setInterval(() => {
//     const price = (Math.random() * 1000).toFixed(2);
//     stockEmitter.emit('priceUpdate', price);
// }, 1000);

// // Listen for stock price updates
// stockEmitter.on('priceUpdate', (price) => {
//     console.log(`Stock price updated: ₹${price}`);
// });



// const orderEmitter = new EventEmitter();

// orderEmitter.on('orderPlaced', (orderId) => {
//   console.log(`Order ${orderId} placed successfully.`);
//   setTimeout(() => {
//     orderEmitter.emit('paymentProcessed', orderId);
//   }, 2000);
// });

// orderEmitter.on('paymentProcessed', (orderId) => {
//   console.log(`Payment processed for Order ${orderId}.`);
//   setTimeout(() => {
//     orderEmitter.emit('orderShipped', orderId);
//   }, 2000);
// });

// orderEmitter.on('orderShipped', (orderId) => {
//   console.log(`Order ${orderId} has been shipped.`);
// });

// // Trigger the order process
// orderEmitter.emit('orderPlaced', '12345');


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// const sensorEmitter = new EventEmitter();

// setInterval(() => {
//   const temperature = (Math.random() * 40).toFixed(2);
//   sensorEmitter.emit('temperatureChange', temperature);
// }, 5000);

// sensorEmitter.on('temperatureChange', (temp) => {
//   console.log(`Temperature Updated: ${temp}°C`);
// });


// const os = require('os');

// const eventEmitter = new EventEmitter();

// setInterval(() => {
//   const cpuUsage = os.loadavg()[0]; // Get CPU usage
//   console.log("cpuUsage", cpuUsage)
//   if (cpuUsage > 2) {
//     eventEmitter.emit('highCpuUsage', cpuUsage);
//   }
// }, 5000);

// eventEmitter.on('highCpuUsage', (usage) => {
//   console.log(`⚠️ High CPU Usage detected: ${usage}`);
// });


// const fileEmitter = new EventEmitter();

// let progress = 0;
// const uploadInterval = setInterval(() => {
//   progress += 10;
//   fileEmitter.emit('uploadProgress', progress);
//   if (progress === 100) {
//     clearInterval(uploadInterval);
//     fileEmitter.emit('uploadComplete');
//   }
// }, 1000);

// fileEmitter.on('uploadProgress', (progress) => {
//   console.log(`Upload Progress: ${progress}%`);
// });

// fileEmitter.on('uploadComplete', () => {
//   console.log('✅ File upload completed successfully!');
// });



// const io = require('socket.io')(1000);

// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);

//   socket.on('message', (data) => {
//     console.log(`Message received: ${data}`);
//     io.emit('broadcastMessage', data);
//   });
// });


// Importing events
 
// Initializing event emitter instances 
let eventEmitter = new EventEmitter();

// Registering to myEvent 
eventEmitter.on('myEvent', (msg) => {
   console.log(msg);
});

// Triggering myEvent
eventEmitter.emit('myEvent', "First event");
