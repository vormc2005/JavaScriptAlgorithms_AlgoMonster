function isPallindorme(string){
    let leftPointer = 0;
    let rightPointer = string.length - 1;

    while (leftPointer < rightPointer){
        if(string[leftPointer] !== string[rightPointer]){
            return false;
        }
        leftPointer ++;
        rightPointer --;
    }

    return true
}

var string = 'racecar';
string = 'asdjiydsa'

console.log(isPallindorme(string));