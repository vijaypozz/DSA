// reverse a string in Node.js. 
// A forward loop goes from the start to the end of an array — useful for reading or adding items in order. A reverse loop goes from the end to the start — it’s especially useful when removing or modifying elements, since it avoids index shifting issues
// function reverseString(string) {
//     return string.split('').reverse().join('')
// }

// console.log(reverseString("vijay"))

function reverseString(string) {
    const reversedArr = [];

// for (let index = 0; index < string.length; index++) {
//     // const element = string[index];
//     return string[index]
// reversedArr.push(string[index])

// }

for (let index = string.length -1; index >= 0; index--) {
    // return string[index]
    // console.log(string[index])
    reversedArr.push(string[index])
}
return reversedArr
}

console.log(reverseString("vijay"))

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData()