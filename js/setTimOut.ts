console.log("Before setTimeout");

setTimeout(() => {
  console.log("This runs after 100ms");
}, 0);

console.log("After setTimeout");





const handleMessage = (message) => {
    console.log("New message:", message);
  
    
  setTimeout(() => {
    console.log("setTimeout: Process this task after 50ms");
  }, 5000);

    setImmediate(() => {
      console.log("Logging message to database...");
    });
  };
  
  handleMessage("Hello, how are you?");
  

// const processLargeArray = (array) => {
//     const processChunk = () => {
//       const chunk = array.splice(0, 100); // Process 100 items at a time
//       console.log("Processing chunk:", chunk);
  
//       if (array.length > 0) {
//         setImmediate(processChunk); // Continue processing the next chunk
//       } else {
//         console.log("All items processed!");
//       }
//     };
  
//     processChunk();
//   };
  
//   const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
//   processLargeArray(largeArray);
  
console.log('Start');

process.nextTick(() => {
  console.log('process.nextTick callback');
});

setImmediate(() => {
  console.log('setImmediate callback');
});

console.log('End');
