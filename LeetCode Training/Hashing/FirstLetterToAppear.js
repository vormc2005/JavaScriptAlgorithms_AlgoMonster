const s = "abcdeda"

function repeatedCharacter(s){
    let seen = new Set();
    for(let char of s){
        if(seen.has(char)){
            return char;
        }
        seen.add(char)
    }
    return ""
}

console.log(repeatedCharacter(s))