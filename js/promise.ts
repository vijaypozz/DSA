"A Promise is an object that represents a value that may be available now, later, or never."
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
// Instead of using callbacks (which can cause callback hell), Promises let you write cleaner, more readable async code.
// Promise States
// Pending → The initial state (async task is still running).

// Fulfilled (Resolved) → The async task completed successfully (.then() will run).

// Rejected → The async task failed (.catch() will run).
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true;
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data!");
        }
      }, 1000);
    });
  };
  
  // Using .then() and .catch()
  fetchData()
    .then(data => console.log(data)) // runs if resolved
    .catch(error => console.error(error)); // runs if rejected
  

//     2. What is async/await?

// async/await is syntactic sugar built on top of Promises that makes asynchronous code look synchronous, improving readability.

// async → Makes a function return a Promise automatically.

// await → Pauses execution inside an async function until the Promise is resolved or rejected.
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched successfully!"), 1000);
    });
  };
  
  async function getData() {
    try {
      const result = await fetchData(); // waits here until Promise resolves
      console.log(result);
    } catch (error) {
      console.error(error); // handles rejection
    }
  }
  
  getData();
  

  function promis() {

    return new Promise((resolve, reject) => {
        resolve("im in") 

    })
}

async function fetch(params) {
    
    try {
        const data = await promis()
        console.log(data,"==1=");
        
    } catch (error) {
       console.log(error,"=3==") 
    }

}

fetch()