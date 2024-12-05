const arr = [1,1,2,3,3,4,4 ]


function removeDuplicates(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
    let slowPointer = 0;
    var arr1 = [arr[0]]
    for(let fastPointer = 0; fastPointer < arr.length; fastPointer++){
        if(arr[fastPointer] !== arr[slowPointer]){
            slowPointer++
            arr[slowPointer] = arr[fastPointer]   
            arr1.push(arr[fastPointer]) 
            console.log(arr)       
        }   
        // console.log(arr1)       
    }   
    return slowPointer +1
}

console.log(removeDuplicates(arr))