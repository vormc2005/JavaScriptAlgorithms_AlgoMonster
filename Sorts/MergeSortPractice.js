const arr = [5,3,1,2,4]

function mergeSort(arr){
    const n = arr.length -1;
    if(n <=1) return arr;

    let mid = Math.floor(n/2)
    let leftArray = mergeSort(arr.slice(0, mid))
    let rightArray = mergeSort(arr.slice(mid))

    let res = []
    let leftPointer = 0
    let rightPointer = 0;
    while(leftPointer < mid || rightPointer < n-mid){
        if(leftPointer === mid){
            res.push(rightArray[rightPointer])
            rightPointer++
        }else if(rightPointer === mid){
            res = [...res, leftArray[leftPointer]]            
            // res.push(leftArray[leftPointer])
            leftPointer++
        }else if(leftArray[leftPointer] <= rightArray[rightPointer]){
            res = [...res, leftArray[leftPointer]]
        //    res.push(leftArray[leftPointer])
            leftPointer++
        }else{
            res = [...res, rightArray[rightPointer]]
            // res.push(rightArray[rightPointer])
            rightPointer++
        }
    }
    return res
}

console.log(mergeSort(arr))