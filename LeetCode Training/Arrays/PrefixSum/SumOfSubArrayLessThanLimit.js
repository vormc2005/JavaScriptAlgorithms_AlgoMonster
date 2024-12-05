// Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

// For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].

const nums = [1,6,3,2,7,2]
const queries = [[0,3],[2,5],[2,4]]
const limit = 13

function answerQueries(nums, queries, limit){
    let prefix = [nums[0]]
    let ans = []
    for(let i=1; i<nums.length; i++){
        prefix.push(nums[i]+prefix[prefix.length-1]);
    }

    for(const [x,y] of queries){
        let cur = prefix[y] - prefix[x] + nums[x]
        ans.push(cur < limit)
    }

    console.log(prefix)

    return ans
}




console.log(answerQueries(nums, queries, limit))