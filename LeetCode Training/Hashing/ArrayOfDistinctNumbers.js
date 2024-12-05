// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// const nums = [3,0,1];

// const nums = [0,1];

const nums = [1];

function MissingNumber(nums){   
    let range = nums.length;
    let seen = new Set(nums);
    console.log(seen)
    for(let i = 0; i<= range; i++){
        //Check is seen does not have that number then return the number
        if(!seen.has(i)){
            return i
        }
    }
    return
    
}

console.log(MissingNumber(nums))