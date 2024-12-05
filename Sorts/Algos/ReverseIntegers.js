const reverseInts = (x)=>{
    

    let reversed = x.toString().split("").reverse().join("");
        

    return  (Math.pow(-2, 31) > parseInt(reversed) * Math.sign(x) || parseInt(reversed) * Math.sign(x) > Math.pow(2, 31)) ? 0 : parseInt(reversed) * Math.sign(x)
}


console.log(reverseInts(-123456))