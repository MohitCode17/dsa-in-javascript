/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 MERGE SORT ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// Merge sort is a popular divide-and-conquer algorithm used for sorting arrays or lists of elements. It works by dividing the input array into two halves, sorting each half separately, and then merging the two sorted halves back together to produce a sorted array.

/*
👉 Here are the steps of the merge sort algorithm:

1. Divide the input array into two halves.
2. Recursively sort the two halves using merge sort.
3. Merge the two sorted halves back together into a single sorted array.
*/

// 👉 Implementation

function mergeSort(arr){
    // Base case - if array of 0 or 1 element is already sorted
    if(arr.length <= 1){
        return arr;
    }

    // Divide array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // mid is not included
    const right = arr.slice(mid);

    const leftArr = mergeSort(left);
    const rightArr = mergeSort(right);

    // Merge the sorted left and right halves back together.
    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr){
    const sortedArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, 6];
console.log(mergeSort(arr));


// Time complexity: O(n logn)
// Space complexity: O(n)

// 👉 How Merge Sort is Work - https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/