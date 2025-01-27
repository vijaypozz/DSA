function reverseArray(arr, start, end) {
    while (start < end) {
      // Swap elements
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  function rotateArray(arr, d) {
    const n = arr.length;
  
    // Normalize d in case d > n
    d = d % n;

//   console.log(d,n);
    // Step 1: Reverse the first d elements
    reverseArray(arr, 0, d - 1);
  
    // Step 2: Reverse the remaining n-d elements
    reverseArray(arr, d, n - 1);
  
    // Step 3: Reverse the entire array
    reverseArray(arr, 0, n - 1);
  
    return arr;
  }
  
  // Example 1
  const arr1 = [1, 2, 3, 4, 5, 6];
  const d1 = 2;
  console.log(rotateArray(arr1, d1)); // Output: [3, 4, 5, 6, 1, 2]
  
  // Example 2
  const arr2 = [1, 2, 3];
  const d2 = 2;
  console.log(rotateArray(arr2, d2)); // Output: [2, 3, 1]
  