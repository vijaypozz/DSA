function asyncOperation1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Result of asyncOperation1');
      }, 1000);
    });
  }
  
  function asyncOperation2(previousResult) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(previousResult + ', Result of asyncOperation2');
      }, 1000);
    });
  }
  
  function asyncOperation3(previousResult) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(previousResult + ', Result of asyncOperation3');
      }, 1000);
    });
  }
  
  // Chain multiple asynchronous operations using promises
  asyncOperation1()
    .then(result1 => {
      console.log("result1",result1);
      return asyncOperation2(result1);
    })
    .then(result2 => {
      console.log("result2",result2);
      return asyncOperation3(result2);
    })
    .then(result3 => {
      console.log("result3",result3);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  