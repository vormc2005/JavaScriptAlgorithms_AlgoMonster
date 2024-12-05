

const nums = [3,1,2,7,4,2,1,1,5];
const k = 8


function findLongestArray(nums, k){
    let left = 0;
    let curr = 0;//sum
    let answer = 0;

    for(let right = 0; right < nums.length; right++){
        curr += nums[right]
        while(curr > k){
            curr -= nums[left]
            left++
        }

        answer = Math.max(answer, right-left+1)
    }
    return answer

}

console.log(findLongestArray(nums, k))