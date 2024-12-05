function squareRoot(n){
    if(n === 0) return
    let left = 1
    let right = n
    let indexOfnumber = -1
    while(left <= right ){
        let mid = Math.floor((left+right)/2);
        if(mid * mid === n){
            return mid
        }else if(mid * mid > n){
            indexOfnumber = mid
            right = mid -1;
        }else{
            left = mid +1
        }
    }
    return indexOfnumber -1
}

console.log(squareRoot(8))