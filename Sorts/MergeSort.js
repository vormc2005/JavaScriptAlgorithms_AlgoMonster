function mergeSort(array){
    if(array.length === 1){
        return array
    }

    // Find center, split array into lefe and right
    let center = Math.floor(array.length/2);

    let left = array.slice(0, center);
    let right = array.slice(center);
    return merge(mergeSort(left), mergeSort(right))    
}

function merge(left, right){
    let result = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())

        }else{
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

const array = [99,  56, 12, 101, 2, 3, 9, 1]
console.log(mergeSort(array))





































// function mergeSort(arr){
//     if(arr.length === 1){
//         return arr;
//     }

//     const center = Math.floor(arr.length/2);
//     // left array
//     let leftArray = arr.slice(0, center);
//     // right Array
//     let rightArray = arr.slice(center);

//     return merge(mergeSort(leftArray), mergeSort(rightArray))
// }





























// function merge(left, right){
//     const results = [];

//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             results.push(left.shift());
//         }else{
//             results.push(right.shift());
//         }
//     }

//     return [...results, ...left, ...right]
// }

// const array = [99,  56, 12, 101, 2, 3, 9, 1]
// console.log(mergeSort(array))