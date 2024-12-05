function twoSumSorted(array, target){
    let leftPointer = 0
    let rightPointer = array.length-1;
    while (leftPointer < rightPointer){
        let sum = array[leftPointer] + array[rightPointer];
        //3 cases sum = target,
        // sum larger then target move right ponter to the left
        // sum smaller then move left pointer to the right
        //else target out of range
        if(sum === target){
            return true;
        }
        else if(sum > target){
            rightPointer --;
        }else {
            leftPointer ++;
        }
    }
    return false;
}


let array = [1,2,4,6,8,9,13,15]
console.log(twoSumSorted(array, 25))