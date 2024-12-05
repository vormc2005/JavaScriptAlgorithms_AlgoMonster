const s = "eceba", k = 2

// function longestString(s, k){
//     let counts = new Map();
//     let left = 0, ans = 0

//     for(let right = 0; right< s.length; right++){
//         counts.set(s[right], (counts.get(s[right]) || 0) +1);
//         while(counts.size > k){
//             counts.set(s[left], counts.get(s[left])-1)
//             if(counts.get(s[left]) == 0){
//                 counts.delete(s[left])
//             }
//             left++
//         }
//         ans = Math.max(ans, right - left +1);
//     }
//     return ans
// }

function longestString(s, k){
    let counts = {};
    var left = 0, ans = 0

    for(let right = 0; right< s.length; right++){
        counts[s[right]] = (counts[s[right]] || 0) + 1    
        while(Object.keys(counts).length > k){           
            counts[s[left]] --           
            if(counts[s[left]] === 0){
                delete counts[s[left]]
            }
            left++
        }
        ans = Math.max(ans, right - left +1);
    }
    return ans
}

console.log(longestString(s, k))




