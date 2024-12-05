function squareNumbers(array){  
   
    // let result = array.map(x=>x*x).sort(compare)   
    let result = array.map(x=>x*x).sort((a,b)=> a-b);   
    return result
}

function compare(a, b){
    if(a < b){
        return -1;

    }else if(a > b){
        return 1
    }else{
        return 0
    }
}

console.log(squareNumbers([-10,-5,1,2,4,7]))