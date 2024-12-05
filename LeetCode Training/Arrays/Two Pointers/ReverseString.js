// const reverseString=(s)=>{
//     let reversed = "";
//     let rightPointer = s.length-1;
//     while(rightPointer >=0){
//         reversed += s[rightPointer]
//         rightPointer --;
//     }

//     return reversed;
// }


// const reverseString=(s)=>{
//     let reversed = s.split("").reverse().join("")
   
//     return reversed;
// }

// let s = "Hello";
// console.log(reverseString(s))

//String is given as array

let array = ['H', 'e', 'l', 'l', 'o'];
function reverseArray(array){
    let leftPointer = 0;
    let rightPointer = array.length -1;
    while(leftPointer < rightPointer){
        let temp = array[leftPointer];
        array[leftPointer] = array[rightPointer];
        array[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
    return array
}

console.log(reverseArray(array))