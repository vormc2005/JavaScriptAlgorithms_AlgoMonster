// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

// const arr = [1,2,3]
const arr = [1,1,2,3,3,4,5,5,7,7]

function countElements(array){
    let count = 0;
    let set = new Set(arr);
    for(let num of arr){
        //if num+1 in the set thenincrement
        if(set.has(num+1)){
            count ++;
        }
    }
    return count;

}

console.log(countElements(arr))