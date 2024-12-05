// Example 3: 1941. Check if All Characters Have Equal Number of Occurrences

// Given a string s, determine if all characters have the same frequency.

// For example, given s = "abacbc", return true. All characters appear twice. Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.

// const s = "abacbc";
const s = "aaabb"

function areOccurencesEqual(s){
    let counts = new Map()
    for(const char of s){
        counts.set(char, (counts.get(char) || 0)+1)
    }
    let frequencies = new Set()
    for(const val of counts.values()){
        frequencies.add(val)
    }
    return frequencies.size === 1
}

console.log(areOccurencesEqual(s))