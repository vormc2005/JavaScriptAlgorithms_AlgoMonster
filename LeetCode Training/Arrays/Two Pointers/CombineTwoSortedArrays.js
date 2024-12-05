const combineArrays = (arr1, arr2)=>{
    let resultArray = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            resultArray.push(arr1[i]);
            i++;
        }else{
            resultArray.push(arr2[j])
            j++;
        }
    }

    while(i < arr1.length){
        resultArray.push(arr1[i])
        i++;
    }

    while(j < arr2.length){
        resultArray.push(arr2[j])
        j++;
    }
    return resultArray;
}

let arr1 = [1,4,7,20]
let arr2 = [3,5,6]

combineArrays(arr1, arr2)