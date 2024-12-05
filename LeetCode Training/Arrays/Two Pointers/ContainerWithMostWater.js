const arr = [1,8,6,2,5,4,8,3,7];



function containerWithMostWater(arr) {
    let left = 0;
    let right = arr.length -1;
    let maxArea = 0;

    while(left < right){
        const currentArea = Math.min(arr[left], arr[right]) * (right - left)
        maxArea = Math.max(maxArea, currentArea);

        if(arr[left] < arr[right]){
            left++
        }else{
            right --;
        }

    }
    return maxArea
}

console.log(containerWithMostWater(arr))