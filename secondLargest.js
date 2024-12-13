function secondLargest(arr) {
    // let largest, secondLargest
    let n = arr.length
    // console.log(n);
    for (let i = n-2; i >= 0; i--) {
        console.log(i,arr[i],"=======",arr[i] , arr[arr.length - 1],arr.length - 1);
        if (arr[i] !== arr[arr.length - 1]) {
            return "The second largest element is " + arr[i];
        }
    }

    // for (let i = 2; i < arr.length; i++) {
    //     console.log(arr[i], "============")
    //     // if (arr[i] !== arr[arr.length - 1]) {
    //     //     return "The second largest element is " + arr[i];
    //     // }    
    // }

    //Start the loop from the second last element (arr.length - 2).
    //Check if the current element is not equal to the largest element (arr[arr.length - 1]).
    // Iteration:

    // Start from the second last element: arr[5] = 35.
    // Compare arr[5] with arr[6] (largest = 35):
    // arr[5] === arr[6], so continue.
    // Move to arr[4] = 34:
    // arr[4] !== arr[6], so return "The second largest element is 34".
    // }
    // console.log(  arr.sort((a, b) => b - a))
    // for (let i = 4; i < arr.length; i++) {
    //     console.log(arr[i])
    //     // if (arr[i] !== arr[arr.length - 1]) {
    //     //     return "The second largest element is " + arr[i];
    //     // }    
    // }



    // getSecondLargest(arr) {

    //     if (arr.length < 2) {
    //         return -1; // Returning -1 to indicate invalid input, as per typical conventions.
    //     }

    //     let largest = -Infinity, secondLargest = -Infinity;

    //     for (let num of arr) {
    //         if (num > largest) {
    //             secondLargest = largest;
    //             largest = num;
    //         } else if (num > secondLargest && num < largest) {
    //             secondLargest = num;
    //         }
    //     }

    //     return secondLargest === -Infinity ? -1 : secondLargest; // Handle case when no second largest.
    // }
}
console.log(secondLargest([12, 35, 1, 10, 34, 1]))


