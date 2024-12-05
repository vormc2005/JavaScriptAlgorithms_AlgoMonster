// function fn(nums, k):
//     left = 0
//     curr = 0
//     answer = 0
//     for (int right = 0; right < nums.length; right++):
//         curr += nums[right]
//         while (curr > k):
//             curr -= nums[left]
//             left++

//         answer = max(answer, right - left + 1)

//     return answer

// const nums = [3, 1, 2, 7, 4, 2, 1, 1, 5], k = 8

// function longestSubarraySum(nums, k){
//     let left = 0
//     let cur = 0
//     let answer = 0

//     for(let right = 0; right < nums.length; right++){
//         cur += nums[right]
//         while(cur > k){
//             cur -= nums[left]
//             left++;
//         }

//         answer = Math.max(answer, right - left +1);

//     }

//     return answer
// }


// console.log(longestSubarraySum(nums, k))


// function numSubArrayProductLess(nums, k){
//     if(k <= 1){
//         return 0
//     }
//     let answer = 0, left = 0, curr = 1
//     for(let right = 0; right< nums.length; right ++){
//         curr *= nums[right]
//         while(curr >= k){
//             curr /= nums[left]
//             left++
//         }
//         answer += right-left+1
//         console.log("Here:", answer)
//     }
//     return answer
// }

function numSubArrayProductLess(nums, k){
    if(k <= 1){
        return 0
    }
    let left = 0, curr = 1
    let array = []
    for(let right = 0; right< nums.length; right ++){
        let temp = []
        curr *= nums[right]
        while(curr >= k){
            
            curr /= nums[left]
            left++
           


        }
        temp.push(nums[left])
        
        temp.push(nums[right])
        array.push(temp)
        console.log("Here:", array)
    }
    return array
}

console.log(numSubArrayProductLess([10, 5, 2, 6], 100))

