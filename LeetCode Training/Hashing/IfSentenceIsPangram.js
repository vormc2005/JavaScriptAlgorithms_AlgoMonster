const sentence = "thequickbrownfoxjumpsoverthelazydog";

// const sentence = "leetcode";

function IfSentenceIsPangram(sentence){   
var newSet = new Set(sentence)
console.log(newSet)
    for(let i=65; i<=90; i++){
        // alphabet.add(String.fromCharCode(i).toLowerCase())
        let char = String.fromCharCode(i).toLocaleLowerCase()
        if(!newSet.has(char)){
            return false
        }
    }
    return true
}

console.log(IfSentenceIsPangram(sentence))