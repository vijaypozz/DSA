// Given an array arr[]. 
// Push all the zeros of the given array to the right end of the array 
// while maintaining the order of non-zero elements. Do the mentioned change in the array in place.

// function pushZerosToEnd(arr) {
//     const filter1 = arr.filter((item, index) => {
//         // console.log(item,index)
//         return item !== 0
//     })
//     const filter2 = arr.filter((item, index) => {
//         // console.log(item)
//         return item == 0
//     })
//     return filter1.concat(filter2)
// }

// console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]))
//  Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]

// const data = [1, 2, 4, 3, 5, 0, 0, 0]
// console.log(data[0])

function pushZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i],"===")

        if (arr[i] !== 0) {
            // console.log(arr[i],"=========1")
            // Swap current element with the position of nonZeroIndex
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            // console.log(arr[i], "=========arr===========>")
            nonZeroIndex++;
            // console.log(nonZeroIndex, "=========2")

        }
        // console.log(nonZeroIndex, "=============nonZeroIndex====.")
        // arr[i]++
        // console.log(arr)

    }
    return arr;
}

console.log(pushZerosToEnd([1, 0, 3, 2, 0, 4, 3, 0, 6, 0])); // Output: [1, 2, 4, 3, 5, 0, 0, 0]



// Swaps the element at nonZeroIndex with the current element arr[i]:
// If nonZeroIndex and i are the same, nothing changes.
// If nonZeroIndex is different from i, the non-zero element is moved forward, and the zero (if any) is moved backward.

// After swapping, nonZeroIndex is incremented to prepare for the next non-zero element.

// console.log(pushZerosToEnd([10, 20, 30])); // Output: [1, 2, 4, 3, 5, 0, 0, 0]

// Example Walkthrough
// Input: [1, 2, 0, 4, 3, 0, 5, 0]
// Initial State:

// arr = [1, 2, 0, 4, 3, 0, 5, 0], nonZeroIndex = 0
// Iteration:

// i = 0: arr[0] = 1 (non-zero) → Swap arr[0] with arr[0], nonZeroIndex = 1
// i = 1: arr[1] = 2 (non-zero) → Swap arr[1] with arr[1], nonZeroIndex = 2
// i = 2: arr[2] = 0 (zero) → Skip
// i = 3: arr[3] = 4 (non-zero) → Swap arr[3] with arr[2], nonZeroIndex = 3
// i = 4: arr[4] = 3 (non-zero) → Swap arr[4] with arr[3], nonZeroIndex = 4
// i = 5: arr[5] = 0 (zero) → Skip
// i = 6: arr[6] = 5 (non-zero) → Swap arr[6] with arr[4], nonZeroIndex = 5
// i = 7: arr[7] = 0 (zero) → Skip
// Final Array: [1, 2, 4, 3, 5, 0, 0, 0]

// Advantages of This Approach
// Time Complexity:

// Single traversal of the array → O(n).
// Space Complexity:

// In-place operation → O(1).
// Efficient for Large Arrays:

// Avoids creating additional arrays like filter, making it more memory-efficient.
// Comparison with Original filter-Based Solution
// Aspect	Filter-Based Solution	Optimized Two-Pointer Solution
// Time Complexity	O(2n) (two filter calls)	O(n) (single traversal)
// Space Complexity	O(n) (new arrays created)	O(1) (in-place operation)
// Suitability	Quick and readable	DSA-friendly and scalable
// By using the optimized version, we align better with DSA principles, making the solution more efficient and applicable in competitive programming or large-scale systems.

// let arr = [10, 20,3,88,90];
// let i = 3;
// let nonZeroIndex = 0;
// it will move to first index
// // Swap
// [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];

// console.log(arr); // [20, 10]