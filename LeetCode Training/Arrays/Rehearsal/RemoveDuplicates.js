const arr = [1,1,1,2,3,4,4, 9,9,3]

function removeDuplicates(arr){
    let slowPointer = 0
    var noDupsArr = [arr[0]]
    for(let fastPointer = 0; fastPointer < arr.length; fastPointer++){
        if(arr[fastPointer] !== arr[slowPointer]){
            slowPointer++;
            arr[slowPointer] = arr[fastPointer]
            // slowPointer = fastPointer
            noDupsArr.push(arr[fastPointer])
        }
    }
    return noDupsArr
}

console.log(removeDuplicates(arr))
