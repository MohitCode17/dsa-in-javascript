/*
👉 Sum Zero Problem

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

Input: arr[]= {0 2 1 2 0}
Output: 0 0 1 2 2

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/

// You can use the Dutch National Flag algorithm, also known as the Three-Way Partitioning algorithm. The flag of the Netherlands consists of three colors: white, red, and blue. The task is to randomly arrange balls of white, red, and blue in such a way that balls of the same color are placed together. For DNF (Dutch National Flag), we sort an array of 0, 1, and 2's in linear time that does not consume any extra space. We have to keep in mind that this algorithm can be implemented only on an array that has three unique elements.

// Steps -
// 1. Take three-pointers, namely - low, mid, high.
// 2. We use low and mid pointers at the start, and the high pointer will point at the end of the given array.

// Cases -
// If array [mid] = 0, then swap array [mid] with array [low] and increment both pointers once.
// If array [mid] = 1, then no swapping is required. Increment mid pointer once.
// If array [mid] = 2, then we swap array [mid] with array [high] and decrement the high pointer once.

function sort012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}

// Example usage:
const inputArr = [0, 1, 2, 0, 1, 2, 0, 0, 1];
sort012(inputArr);
console.log(inputArr);