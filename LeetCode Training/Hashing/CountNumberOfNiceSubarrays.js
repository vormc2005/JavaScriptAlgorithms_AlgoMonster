// Example 5: 1248. Count Number of Nice Subarrays

// Given an array of positive integers nums and an integer k. Find the number of subarrays with exactly k odd numbers in them.

// For example, given nums = [1, 1, 2, 1, 1], k = 3, the answer is 2. The subarrays with 3 odd numbers in them are [1, 1, 2, 1, 1] and [1, 1, 2, 1, 1].


const nums = [1, 1, 2, 1, 1], k=3

function numberOfSubArrays(nums, k){
    let counts = new Map();
    let ans = 0, curr = 0;

    for(const num of nums){
        curr += num%2
        console.log("num%2", num%2)
        console.log(curr)
        ans += counts.get(curr - k)||0;
        console.log("ans", ans)
        counts.set(curr, (counts.get(num)||0)+1)
    }
    return ans;
}

console.log(numberOfSubArrays(nums, k))