const arr = [1, 2, 3, 4, 2, 5, 3, 6, 1];
const counts = {};
const duplicates = [];

for (let num of arr) {
  if (counts[num]) {
    counts[num]++; // already seen → increase count
    if (counts[num] === 2) {
      duplicates.push(num); // add to duplicates only once
    }
  } else {
    counts[num] = 1; // first time seeing this number
  }
}

console.log("Duplicates:", duplicates); // [2, 3, 1]


const str = "programming";
const stringCounts = {};
const duplicatesStrings = [];

for (let char of str) {
  if (stringCounts[char]) {
    stringCounts[char]++;
    if (stringCounts[char] === 2) {
      duplicatesStrings.push(char);
    }
  } else {
    stringCounts[char] = 1;
  }
}

console.log("DuplicatesStrings:", duplicatesStrings); // [ 'r', 'g', 'm' ]


// Step 1: Explain the logic simply

// “I’m using a hash map (object in JavaScript) to keep track of how many times each element appears.

// I loop through the array once.

// For each element:

// If I’ve seen it before, I increase its count.

// If not, I set the count to 1.

// If the count reaches 2, I know it’s a duplicate.”



// Step 2: Explain the time complexity

// Looping through the array → O(n) (we touch each element once).

// Hash map operations (get, set) → O(1) on average (because hash tables are constant time lookups).

// So total = O(n) time complexity.

// 👉 This means the algorithm scales linearly with the input size.

// My code loops through the array once and uses a hash map to count occurrences.
// This makes the time complexity O(n) because we check each element only once.
// The space complexity is also O(n) since we might store all elements in the hash map if they’re all unique.
// This is the most efficient way because sorting would take O(n log n), but a hash map gives me faster lookups.”

// Complexity:

// Time Complexity: O(n) → we touch each element once.

// Space Complexity: O(n) → store counts of elements in hash map.

// 💡 Why fast:

// No nested loops → only linear traversal.

// Constant-time hash map lookups.