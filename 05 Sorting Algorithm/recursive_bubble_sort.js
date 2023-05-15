/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 BUBBLE SORT ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// 👉 Implementation Using Recursion


function bubbleSortRecursive(arr, n = arr.length) {
    // Base case
    if (n === 1) {
      return arr;
    }

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    
    // Recursive case
    return bubbleSortRecursive(arr, n - 1);
  }
  

const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = bubbleSortRecursive(arr);
console.log(sortedArr);