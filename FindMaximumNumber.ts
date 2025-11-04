function findMax(arr) {
    return Math.max(...arr);
  }
  
  console.log(findMax([1, 3, 7, 2, 5])); // Output: 7
  

  function findLargest(nestedArr) {
    let largest = -Infinity; // start with the smallest possible number
  
    for (let i = 0; i < nestedArr.length; i++) {
      for (let j = 0; j < nestedArr[i].length; j++) {
        if (nestedArr[i][j] > largest) {
          largest = nestedArr[i][j]; // update largest if current is bigger
        }
      }
    }
  
    return largest;
  }
  
  const nestedArray = [
    [1, 5, 3],
    [10, 2],
    [7, 8, 12]
  ];
  
  console.log(findLargest(nestedArray)); // 12
  