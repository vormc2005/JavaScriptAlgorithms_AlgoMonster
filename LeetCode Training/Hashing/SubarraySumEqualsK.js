// Example 4: 560. Subarray Sum Equals K

// Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.

nums = [1, 2, 1, 2, 1], k = 3

function subArraySum(nums, k){
    let counts = new Map();
    counts.set(0,1);
    let ans = 0, curr = 0;
    for(const num of nums){
        curr += num;
        ans += counts.get(curr - k)||0;
        counts.set(curr, (counts.get(curr)||0)+1);
    }

    return ans;
}

console.log(subArraySum(nums, k))