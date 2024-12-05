const arr = [1, 0, 2, 0, 0, 7]

function moveZeros(nums) {
    let slowPointer = 0;   

    for(let fastPointer = 0; fastPointer < nums.length; fastPointer++){
        if(nums[fastPointer] !==0){
            // [nums[slowPointer], nums[fastPointer]] = [nums[fastPointer], nums[slowPointer]];
            let temp = nums[slowPointer]
            nums[slowPointer] = nums[fastPointer]
            nums[fastPointer] = temp
            slowPointer++
        }
      
    }
    console.log(arr)
}

moveZeros(arr)