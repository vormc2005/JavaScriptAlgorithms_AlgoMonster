// function countDown(num){
//     if(num <=0){
//         console.log("Done")
//         return;
//     }
//     console.log(num)
//     num--;
//     countDown(num)
// }

// countDown(5);
// sumrange
function sumRange(num){
    if(num === 1) return 1
    return num + sumRange(num-1)
}
// factorial
function factorial(num){
    if(num === 0){
        return 1
    }

    return num * factorial(num-1)
}

// power
function power(base, exponent){
    // 2 * 2 * 2 * 2
    if(exponent === 0) return 1
    
    return base * power(base, exponent -1)
}
// 
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array){
    // array[1] * array[2] * array[3]...
    if(array.length === 0) return 1
    return firstItem * productOfArray(array.slice(1))
}
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(){
    // add whatever parameters you deem necessary - good luck!  
  }
