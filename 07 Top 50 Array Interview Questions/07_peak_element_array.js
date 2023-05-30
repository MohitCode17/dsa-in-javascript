/*
👉 Given an array arr[] of integers. Find a peak element i.e. an element that is not smaller than its neighbors. 

Note: For corner elements, we need to consider only one neighbor. 

Example:
Input: array[]= {5, 10, 20, 15}
Output: 20
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.
*/

// 👉 Brute Force Approach

// The brute force approach involves iterating through each element in the array and checking if it is larger than its neighbors.

function findPeakElement(arr) {
    const n = arr.length;
    
    // Check if first element is peak element
    if(n === 1 || arr[0] >= arr[1]) {
        return arr[0];
    }

    // check if last element is peak element
    if(arr[n - 1] >= arr[n - 2]) {
        return arr[n-1];
    }

    // iterate loop and check for remaining
    for(let i=1; i < n-1; i++) {
        if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) {
            return arr[i];
        }
    }

    return -1;
}

// console.log(findPeakElement([5, 10, 20, 15]));  // 20
// console.log(findPeakElement([0, 20, 15, 2, 23, 90, 67]));   // 20 or 90


// Time Complexity : O(n)




// 👉 Optimized Approach (Using Binary Search)

// Steps:
// 1. Find a mid element in the array and compare it with its neighbors to determine whether it is a peak.
// 2. If the mid element is smaller than its left neighbor, then there must be a peak on the left side of the array. 
// 3. If the mid element is smaller than its right neighbor, then there must be a peak on the right side of the array.


function findPeakElementOptimized(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] < arr[mid+1]) {
            start = mid + 1; // Peak is on the right side
        }else {
            end = mid // // Peak is on the left side including mid
        }
    }
    return arr[start];
}

// Example usage
const arr = [5, 10, 30, 15];
const arr1 = [0, 20, 15, 2, 23, 90, 67]
const peakElement = findPeakElement(arr);
console.log(peakElement);


// Time Complexity : O(log n)