const arr = [0, 0, 1, 1, 1, 2, 2]

function removeDuplicates(arr){
    let slowPointer = 0
    for(let fast = 0; fast < arr.length; fast++){
        if(arr[fast] !==arr[slowPointer]){
            slowPointer ++
            arr[slowPointer] = arr[fast]
        }
    }
    console.log(arr.slice(0,slowPointer+1))
    return slowPointer + 1
}

console.log(removeDuplicates(arr))