// Example 2: You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

// For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.

// Because the string can only contain "1" and "0", another way to look at this problem is "what is the longest substring that contains at most one "0"?". This makes it easy for us to solve with a sliding window where our condition is window.count("0") <= 1. We can use an integer curr that keeps track of how many "0" we currently have in our window.

const s = "1101100111"

function findLengthOfOnes(s){
   let left = 0;
   let cur = 0;
   let strLength = 0;
   for(let right =0; right < s.length; right++){
    if(s[right] === "0"){
        cur ++
    }
    while(cur > 1){
        if(s[left] ==="0"){
            cur --;
        }
        left ++;
    }
    strLength = Math.max(strLength, right-left +1)
   }

return strLength

}

console.log(findLengthOfOnes(s))