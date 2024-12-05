// Example 2: 2270. Number of Ways to Split Array

// Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.

const array = [10, 4, -8, 7]

function waysToSplit(nums){
    let n = nums.length;
    let prefix = [nums[0]];

    for(let i = 1; i<n; i++){
        prefix.push(nums[i]+ prefix[prefix.length-1])
    }

    let ans = 0;
    for(let i = 0; i< n-1;i++){
        let leftSide = prefix[i]
        let rightSide = prefix[n-1] - prefix[i]
        if(leftSide >= rightSide){
            ans ++
        }
    }
    return ans
}


var waysToSplitArray1 = function(nums) {
    let ans = 0, leftSection = 0, total = 0;
    for (const num of nums) {
        total += num;
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        leftSection += nums[i];
        let rightSection = total - leftSection;
        if (leftSection >= rightSection) {
            ans++;
        }
    }
    
    return ans;
};

console.log(waysToSplit(array))