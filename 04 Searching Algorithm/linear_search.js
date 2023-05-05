/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 LINEAR SEARCH ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// Linear search is the simplest searching algorithm that checks each element in the collection one by one until desired element is found.

// 👉 Implementation

// Find kth Element in an array and return index of it, If not found return -1.

function linearSearch(arr, k){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === k){
            return i;
        }
    }
    return -1;
}

const data = [21, 23, 45, 32, 34, 67, 87], target = 32;
const result = linearSearch(data, target);
console.log(result);

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/