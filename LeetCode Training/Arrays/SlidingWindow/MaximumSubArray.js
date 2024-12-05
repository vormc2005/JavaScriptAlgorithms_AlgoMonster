// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


let array = [1,12,-5,-6,50,3]
const k=4

function findMaximumSubArray(nums, k){
    let curr = 0;


    for(let i = 0; i<k; i++){
        curr += nums[i] 
    }
    let maxSum = curr;
    for(let i = k; i<nums.length; i++){
        curr += nums[i]
        curr -= nums[i-k]
        maxSum = Math.max(curr, maxSum)
    }
    return maxSum/k
}

console.log(findMaximumSubArray(array, k))