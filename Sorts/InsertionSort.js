/**
 * Pair class to store key-value pairs
 */
class Pair {
    /**
     * @param {number} key The key to be stored in the pair
     * @param {string} value The value to be stored in the pair
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class Solution {
    /**
     * Entry point for the Insertion Sort algorithm
     * @param {Pair[]} pairs Array of Pair objects to be sorted
     * @returns {Pair[][]} Array containing the state of the array at each step
     */
    insertionSort(pairs) {       
        const res = []; // To store the intermediate states of the array

        for (let i = 0; i < pairs.length; i++) {
            let j = i - 1;
            console.log("j",j)
            
            // Move elements that are greater than key one position ahead
            while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
                [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
                j -= 1;
            }
         
            // Clone and save the entire state of the array at this point
            res.push([...pairs]);
        }

        return res;
    };

    insertionSort_v2(array){        
        for (let i = 0; i < array.length; i++) {
            let current = array[i];
            
            let j = i - 1;         
    
            // Move elements of array[0..i-1], that are greater than key, 
            // to one position ahead of their current position
            while (j >= 0 && array[j].key > current.key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = current;             
           
        }
        return array;
    }
    
}
let pair1 = new Pair(5, "apple");
let pair2 = new Pair(2, "banana");
let pair3 = new Pair(9, "cherry")
var sort = new Solution();
 pairs1 = [pair1, pair2, pair3]
// console.log("pairs", pairs1[0])
// pairs = [[5, "apple"], [2, "banana"], [9, "cherry"]]
// console.log(pairs[0].key)
var pairs = [5,3,2,7]
// console.log(pairs1)

Output:
[[(5, "apple"), (2, "banana"), (9, "cherry")], 
 [(2, "banana"), (5, "apple"), (9, "cherry")], 
 [(2, "banana"), (5, "apple"), (9, "cherry")]]

console.log(sort.insertionSort(pairs1));