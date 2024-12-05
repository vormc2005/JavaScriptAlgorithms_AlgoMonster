const nums = [3,-1,4,12,-8,5,6], k = 4;

function findLargestSumWhereLength(nums, k){
    let curr = 0;
    let answer = curr;

    for(let i = 0; i<k; i++){
        curr +=nums[i]
    }

    for(let i=k; i<nums.length; i++){
        curr += nums[i] - nums[i-k]
        answer = Math.max(answer, curr)
    }
    return answer;
}


