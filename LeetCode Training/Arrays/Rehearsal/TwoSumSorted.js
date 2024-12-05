const nums = [1, 2, 4, 6, 8, 9, 14, 15], target = 13

function targetSum(nums, target){
    let leftPointer = 0, rightPointer = nums.length -1;
    while(leftPointer < rightPointer){
        let sum = nums[leftPointer] + nums[rightPointer];
        if(sum === target) return true;
        sum > target ? rightPointer -- : leftPointer++;
      
    }
    return false
}

console.log(targetSum(nums, target))