// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
const nums = [1,2,3,4]


function runningSum(nums){
    let prefix = [nums[0]]
    for(let i = 1; i < nums.length; i++){
        prefix.push(nums[i]+prefix[prefix.length-1])
    }

    return prefix
}

console.log(runningSum(nums))