const arr1 = [1,4,7,20], arr2 = [3,5,6]

function combineArrays(arr1, arr2){
    let i = 0;
    let j = 0
    let sorted = []

    while (i < arr1.length && j< arr2.length){
        if(arr1[i] < arr2[j]){
            sorted.push(arr1[i])
            i++;
        }else{
            sorted.push(arr2[j])
            j++;
        }
    }
    // console.log(sorted)
    while(i < arr1.length){
        sorted.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        sorted.push(arr2[j])
        j++;
    }
        console.log(sorted)
}

console.log(combineArrays(arr1, arr2))