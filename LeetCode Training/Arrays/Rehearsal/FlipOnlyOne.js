const s = "1101100111"

function flipOnlyOne(s){
    let left = 0;
    let cur = 0;
    let answer = 0

    for(let right = 0; right < s.length; right++){
//Condition
        if(s[right] === "0"){
            cur ++;
        }
        while(cur > 1){
            if(s[left] == "0"){
                cur -=1
            }
            left ++;
        }
        answer = Math.max(answer, right-left+1)

    }
    return answer
}

console.log(flipOnlyOne(s))