// function findPermutations(arr, temp = [], result = []) {
//     if (arr.length === 0) {
//         result.push([...temp]);
//         return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         const current = arr.splice(i, 1)[0];
//         temp.push(current);
//         findPermutations(arr, temp, result);

//         temp.pop();
//         arr.splice(i, 0, current);
//         console.log("arr----------------->", arr)

//     }

//     return result;
// }

// console.log(findPermutations([1, 2, 3]));
// // Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
// // Maze Solving
// // Generating Permutations/Combinations
// // Word Search in a Grid

function findPermutations(){
// for(let i = 0; i<5;i++){
//     setTimeout(()=>{
//     console.log(i)
//     },i*1000)
//     }
//     }    

setTimeout(()=> console.log(1),2000);
   console.log(2);
   setTimeout(()=> console.log(3),0);
   console.log(4);}

    findPermutations()