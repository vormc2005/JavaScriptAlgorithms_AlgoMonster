let s = 'A brown fox jumping over'

function isPalindrome(s){
    let lower = s.toLowerCase()
    let replaced = lower.replace(/[^a-zA-Z0-9]/g,"")
    
    let start = 0;
    let end = replaced.length-1;
    while(start < end){       
        if(replaced[start] !== replaced[end]) return false
        if(replaced[start] === replaced[end]){
            start++;
            end --;
        } 
        
    }
    return true;
   
}

console.log(isPalindrome(s))