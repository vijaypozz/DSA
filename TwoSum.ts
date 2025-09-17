
// find two numbers inside the array whose sum equals the target
// nums = [3, 5, 8, 12];
// target = 13;
// Answer = [1, 2] (indexes of 5 and 8)
function twoSum(nums, target) {
    let map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (map.has(diff)) {
        return [map.get(diff), i]; // found answer
      }
      map.set(nums[i], i);
    }
  }
  
  console.log(twoSum([2,7,11,15,5,4], 9)); // [0,1]  // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
  



//   Brute Force (Simple but Slow)
  const twoSums = (array, goal) => {
    let indexes = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
          }
       }
    }
    return indexes;
}

console.log(twoSums([1, 3, 10, 11, 14], 13));