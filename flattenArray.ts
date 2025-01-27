const arr = [[2,3,3],[4,5],[3,4]];

function flattenArray(arr,flattenedArray){
    
    console.log(flattenedArray,'flattenedArray')
    for(let i=0;i<arr.length;i++){
        console.log(arr[i],'arr[i]')
        if(Array.isArray(arr[i])){
            flattenArray(arr[i],flattenedArray)
        }
        else{
        console.log(arr[i],'arr[i] here')
            
           flattenedArray.push(arr[i]) 
        }
    }
    console.log(flattenedArray,'flattenedArray after')
    
   return flattenedArray
}
flattenArray(arr,[])


// Flattening a deeply nested array
// Parsing JSON objects
// Processing file system directories
// javascript
// Copy code


// function flattenArray(arr, result = []) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flattenArray(arr[i], result);
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]
