var rotate = function(nums, k) {
    console.log(nums)
    var firstElements = nums.splice(0, k+1);
    var lastElements = nums.splice(-k);
    
    console.log(firstElements)
    console.log(lastElements)
    console.log([...lastElements, ...firstElements])

    
    return [...lastElements, ...firstElements]
};


// var rotate = function(nums, k) {
//     // pop(), unshift
//     for(let i = 1; i <= k; i++ ){
//         // let lastElement = nums[-1];
//         // pop > unshift
//         var lastElement = nums.pop()
//         nums.unshift(lastElement)
//     }
//     console.log(nums)
//     return nums
// };

var nums = [1,2,3,4,5,6,7], k = 3
rotate(nums, k)

var rotate = function(nums, k) {
    k = k % nums.length;
    nums.reverse()
    revNums(nums, 0, k-1)
    revNums(nums, k, nums.length -1)
    return nums;
};

// Create helper function
var revNums = function(nums, start, end){
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
}

let array =  [1,2,3,4,5,6,7]