// Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. This is the problem we have been talking about above. We will now formally solve it.


const array = [3,1,2,7,4,2,1,1,5]

function findLength(array, k){
  let left = 0;
  let curr = 0;
  let answer = 0;
    for(let right = 0; right < array.length; right++){
        curr += array[right]
        while(curr > k){
            curr -= array[left]
            left ++
        }
        answer = Math.max(answer, right-left+1)
    }
    return answer
}

console.log(findLength(array, 8))