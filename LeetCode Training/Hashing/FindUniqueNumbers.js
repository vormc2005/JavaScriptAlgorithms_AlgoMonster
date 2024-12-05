// Example 3: Given an integer array nums, find all the unique numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

const nums = [1, 2, 3, 5,88]

function findNumber(nums){
    let answer = [];
    let seen = new Set(nums);

    for(const num of seen){
        if(!seen.has(num + 1) && !seen.has(num-1)){
            answer.push(num)
        }
    }
    return answer;
}

console.log(findNumber(nums))