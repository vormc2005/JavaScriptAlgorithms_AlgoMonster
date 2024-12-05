const s = "racecara";

function isPalindrome(s){
 let leftpointer = 0;
 let rigthPointer = s.length -1;
 while(leftpointer < rigthPointer){
    if(s[leftpointer] !== s[rigthPointer]){
        return false;
    }
    leftpointer ++;
    rigthPointer --;
 }
 return true
}

console.log(isPalindrome(s))

