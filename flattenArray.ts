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
