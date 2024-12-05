const nums = [-3,2,-3,4,2]

function getMinNumber(nums){
   let startValue = 1;
    while(true){
        // Start value = 1
        // Get all of the sum via prefix
        // If sum is < 1  and set isValid to false break out from for loop
        // Finally if isValid return startVlaue if not increment start value
        // 
        let sum = startValue;       
        let isValid = true;
        for(let num of nums){
            sum += num
            if(sum < 1){
                isValid = false;
                break;
            }
        }

        if(isValid){
            return startValue
        }else{
            startValue +=1
        }
    }
  
}




console.log(getMinNumber(nums))

