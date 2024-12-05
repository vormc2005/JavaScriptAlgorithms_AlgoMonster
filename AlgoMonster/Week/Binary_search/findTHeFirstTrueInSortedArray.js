function findBoundary(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid]) {
            boundaryIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return boundaryIndex;
}

const array = [false, false, true, true, true]

console.log(findBoundary(array))


//If non-decreasing o increasing
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let first_true_index = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (feasible(mid)) {
            first_true_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return first_true_index
}