const convert = (s, numRows)=>{
// edge cases: numrows < 2, s.length < numrows

    if(numRows < 2 || s.length === numRows) return s;

    // create array with strings inside === numRows
    // as I am going through the string need to get push letter into appropriate string count from 0 to numrows numrows to 0 
    let array = new Array(numRows);
    array.fill("")
    console.log(array)
    let count = 0;
    let isCountIncreasing = false;

    for(let i=0; i < s.length; i++){
        array[count] = array[count] + s[i];
        
        if(count === numRows -1 || count === 0) isCountIncreasing = !isCountIncreasing
        isCountIncreasing ? count ++ : count --

    }
    return array.join("")
}


const s = "PAYPALISHIRING"

convert(s, 3)


// if(numRows === 1 || s.length < numRows) return s;
// // Direction down and up flag
// // Count = 0
// let isDirection = false;
// let count = 0;

// let rows = new Array(numRows).fill("")

// for(let i = 0; i < s.length; i++){
//     let current = s[i];
//     rows[count] += current;
//     if(count === 0 || count >= numRows - 1) isDirection = !isDirection
//     isDirection ? count ++ : count --;

// }
// return rows.join("")