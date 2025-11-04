// const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

// const duplicates = array.reduce((acc, num) => {
//   acc[num] = (acc[num] || 0) + 1; // count occurrences
//   return acc;
// }, {});

// console.log(duplicates)

// // filter only duplicates (count > 1)
// const duplicateCounts = Object.fromEntries(
//   Object.entries(duplicates).filter(([key, value]) => value > 1)
// );

// // console.log(duplicateCounts);


// const array = [1,2,3,4,5,6,1,2,3,4,7];
// const counts = {};

// array.forEach(num => {
//   counts[num] = (counts[num] || 0) + 1;
// });

// const duplicates = {};
// for (let key in counts) {
//   if (counts[key] > 1) {
//     duplicates[key] = counts[key];
//   }
// }

// console.log(duplicates);


const array = [1, 2, 3, 4, 6, 1, 2, 3, 4,4, 7];
const counts = {};
const duplicates = {};

// count occurrences
for (let i = 0; i < array.length; i++) {
  let num = array[i];
  console.log("num====", num)
  if (counts[num]) {
    counts[num]++;
  } else {
    counts[num] = 1;
  }
}

console.log("counts", counts)
// collect only duplicates
for (let key in counts) {
  if (counts[key] > 1) {
    duplicates[key] = counts[key];
  }
}

console.log(duplicates); 
// { '1': 2, '2': 2, '3': 2, '4': 2 }
