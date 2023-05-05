/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 BINARY SEARCH ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// Binary search is an efficient searching algo that works on sorted collections. I divides the collection into two halves and compares the middle element with the desired element. If the middle element is smaller than the desired element, then the search is continued in the right half, otherwise, the search is continued in the left half.


// 👉 Implementation

// Find kth Element in an array and return index of it, If not found return -1.

// [13, 32, 38, 56, 59, 78, 99, 101, 132, 134];

function binarySearch(arr, k){
    let start = 0, end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] === k){
            return mid;
        }
        else if(arr[mid] < k){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    
    return -1;
}

const data = [13, 32, 38, 56, 59, 78, 99, 101, 132, 134], target = 101;
const result = binarySearch(data, target);
console.log(result);


/*
Time Complexity: O(log n)
Space Complexity: O(1)
*/