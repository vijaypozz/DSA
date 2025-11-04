function removeDuplicates(arr) {
    const seen = {};
    const result = [];
    for (let num of arr) {
        console.log(num)
      if (!seen[num]) {
        seen[num] = true;
        result.push(num);
      }
    console.log(seen)

    }
    return result;
  }
  
  console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5, 1]));
  // [1, 2, 3, 4, 5]
  