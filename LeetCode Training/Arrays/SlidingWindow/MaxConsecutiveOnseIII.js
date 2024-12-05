
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

function findMaxConsecutiveOnes(nums, k){
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for(let right=0; right<nums.length; right++){
        if(nums[right]===0){
            zeroCount++;
        }
        while(zeroCount > k){
            if(nums[left]===0){
                zeroCount --;
            }
            left++
        }
        maxLength = Math.max(right-left+1, maxLength)
    }
    return maxLength
    
}

console.log(findMaxConsecutiveOnes(nums, k))