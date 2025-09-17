function fetchData(callback) {
    console.log("1")
    setTimeout(() => {
        callback("Data received");
    }, 0);
    setImmediate(() =>{
        callback("Data received1");

    })
    console.log("2")

}
fetchData(console.log);  // Output after 2s: Data received





function fetchData(callback) {
    setTimeout(() => {
      callback("Data received");
    }, 1000);
  }
  
  fetchData((result) => console.log(result));
  
"A callback is a function passed as an argument to another function, executed after the task is done."