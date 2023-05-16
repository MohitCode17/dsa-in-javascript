// 👉 Implementation of Recursive Binary Search

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  }

  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, left, mid - 1); // Search left half
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right); // Search right half
  }
}

const arr = [1, 3, 5, 7, 9];
const target = 5;
const result = binarySearchRecursive(arr, target);

console.log(result);
