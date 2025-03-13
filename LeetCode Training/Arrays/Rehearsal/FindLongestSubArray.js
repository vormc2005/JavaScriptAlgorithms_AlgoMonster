const array = [3,1,2,7,4,2,1,1,5]

function findLenghtOfLongestSubArray(arr, k){
    let left = 0;
    let currentSum = 0;
    let answer = 0;
    for(let right = 0; right < arr.length; right++){
        currentSum += arr[right]
        while(currentSum > k){
            currentSum -= arr[left]
            left ++
        }
        answer = Math.max(answer, right - left +1)
    }
    return answer
}

console.log(findLenghtOfLongestSubArray(array, 8))