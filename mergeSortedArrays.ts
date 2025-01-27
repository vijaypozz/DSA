function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }
  
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  
  console.log(mergeSortedArrays([1, 3, 5], [2, 4,1, 6,7])); // Output: [1, 2, 3, 4, 5, 6]
  