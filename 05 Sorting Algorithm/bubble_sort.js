/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 BUBBLE SORT ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// Bubble sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.


// 👉 Implementation

function bubbleSort(arr){
    const n = arr.length;   // 5

    for(let i = 0; i < n; i++){     // when i run 1 time
        for(let j = 0; j < n; j++){  // then j will run 4 time, because n is 5.
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// const unsortedArr = [-6, 20, 8, -2, 4];
const unsortedArr = [6, 21, -8, 12, 4, -10, 40, 34];
const sortedArr = bubbleSort(unsortedArr);
console.log(sortedArr);


/*
Time Complexity: O(n^2), which means that its performance decreases quickly as the size of the input array grows.

Space Complexity: O(1)
*/


// 👉 There are several reasons why bubble sort is not an optimal sorting algorithm in practice. Firstly, it is relatively slow for large input sizes, as its time complexity is quite poor compared to other sorting algorithms like quicksort or mergesort. Secondly, it is not efficient for almost-sorted or partially-sorted input arrays. In these cases, other algorithms like insertion sort can be much faster.

// Overall, while bubble sort is a good introduction to sorting algorithms due to its simplicity, it should not be used for large datasets or performance-critical applications.