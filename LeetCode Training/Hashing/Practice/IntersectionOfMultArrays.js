const nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]];

function IntersectionOfArrays(nums){
    let counts = new Map()
   for(const arr of nums){
    for(const num of arr){
        counts.set(num, (counts.get(num) || 0)+1);
    }
   }

   let n = nums.length;
   let ans = [];
   for(const [key, val] of counts){
    if(val === n){
        ans.push(key)
    }
   }
   return ans.sort((a,b)=> a-b)
}

console.log(IntersectionOfArrays(nums))