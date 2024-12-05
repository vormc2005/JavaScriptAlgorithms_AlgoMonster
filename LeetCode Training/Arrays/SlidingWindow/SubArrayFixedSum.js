const nums = [1, 2, 3, 7, 4, 1] 
const k = 3

function subArrayWithMaxSum(arr, k){
    let windowSum = 0;
   
    for(let i=0; i<k;i++){
        windowSum += arr[i]
    }
    let largest = windowSum
    for(let right = k; right < arr.length; right++){
        const left = right - k
        windowSum -= arr[left]
        windowSum += arr[right]
        largest = Math.max(largest, windowSum)
    }
    return largest
}

console.log(subArrayWithMaxSum(nums, k))