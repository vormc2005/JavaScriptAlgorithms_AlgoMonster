
const s = "abacbc";

function checkOccurences(s){
    let counts = new Map();

    for(let c of s){
        counts.set(c, (counts.get(c) || 0)+1)
    }
    console.log(counts)
    let set = new Set();
    for(let val of counts.values()){
        set.add(val)
    }
    return set.size === 1
}
console.log(checkOccurences(s))