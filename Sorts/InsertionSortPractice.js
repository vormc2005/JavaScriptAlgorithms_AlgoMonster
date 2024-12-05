const arr = [5,3,1,2,4]

function insertionSort(arr){
   for(let i =0; i<arr.length; i++){
    let current = i;
    while(current > 0 && arr[current] < arr[current-1]){
        const temp = arr[current]
        arr[current] = arr[current-1]
        arr[current-1] = temp;
        current --;
    }
   } 
   return arr
}

console.log(insertionSort(arr))

const array = [false, false, true, true, true]

function findBoundary(array){
    let left = 0
    let right = arr.length -1
    let boundaryIndex = -1;
    while(left <= right){
        const mid = Math.floor((left+right)/2)
        if(arr[mid]=== true){
            boundaryIndex = mid
            right = mid - 1
        }else{
            left = mid +1
        }
    }
    return boundaryIndex
}