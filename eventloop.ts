// import fs from 'fs';

console.log('Start');

// Schedule asynchronous tasks
setTimeout(() => console.log('Timer 1'), 0);
setImmediate(() => console.log('Immediate 1'));

// Simulate an I/O operation
fs.readFile('file.txt', () => {
  console.log('File read');
  setTimeout(() => console.log('Timer 2'), 0);
  setImmediate(() => console.log('Immediate 2'));
});

console.log('End');
function setImmediate(arg0: () => void) {
    throw new Error("Function not implemented.");
}

