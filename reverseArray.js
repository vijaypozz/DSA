

// function reverseArray(arr) {

//     // for (let i = 0; i < arr.length; i++) {
//     //     const element = arr[i];
//     //     console.log(element);
//     // }
//     const reversedArr = [];


//     for (let i = arr.length-1; i >= 0; i--) {

//         reversedArr.push(arr[i]);
//     }

//     return reversedArr;


// }

// console.log(reverseArray([1, 2, 3, 4]))



// function reverseArray(arr) {
//     let start = 0; // Pointer to the beginning
//     let end = arr.length - 1; // Pointer to the end
  
//     while (start < end) {
//       // Swap elements at start and end
//       [arr[start], arr[end]] = [arr[end], arr[start]];
  
//       // Move pointers closer
//       start++;
//       end--;
//     }
  
//     return arr; // Return the reversed array
//   }
  
//   // Example 1
//   const arr1 = [1, 4, 3, 2, 6, 5];
//   console.log(reverseArray(arr1)); // Output: [5, 6, 2, 3, 4, 1]
  
//   // Example 2
//   const arr2 = [4, 5, 1, 2];
//   console.log(reverseArray(arr2)); // Output: [2, 1, 5, 4]
  

function reverseArray(arr) {
  let start = 0; // Pointer to the beginning
  let end = arr.length - 1; // Pointer to the end

  while (start < end) {
    // Swap elements at start and end
    [arr[start], arr[end]] = [arr[end], arr[start]];

    // Move pointers closer
    start++;
    end--;
  }

  return arr; // Return the reversed array
}

// Example 1
const arr1 = [1, 4, 3, 2, 6, 5];
console.log(reverseArray(arr1)); // Output: [5, 6, 2, 3, 4, 1]

// Example 2
const arr2 = [4, 5, 1, 2];
console.log(reverseArray(arr2)); // Output: [2, 1, 5, 4]
