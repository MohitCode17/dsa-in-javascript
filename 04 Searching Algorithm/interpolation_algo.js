/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 INTERPOLATION SEARCH ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// Interpolation search is an improved version of binary search that works better for uniformly distributed sorted collections. It uses a formula to guess the position of the desired element in the collection and then compares it with the actual element. If the guessed element is smaller than the desired element, then the search is continued in the right half, otherwise, the search is continued in the left half. It has an average time complexity of O(log log n) where n is the number of elements in the collection.

// 👉 Formula: postion = left + ((element - array[left]) / (array[right]-array[left])) * (right - left)

// 👉 Implementation

function interpolationSearch(arr, element) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right && element >= arr[left] && element <= arr[right]) {
    let pos = Math.floor(
      left + ((element - arr[left]) / (arr[right] - arr[left])) * (right - left)
    );

    if (arr[pos] === element) {
      return pos;
    } else if (arr[pos] < element) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
}

const data = [2, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 17;
const result = interpolationSearch(data, target);
console.log(result);


/*
Time Complexity: O(log log n)
Space Complexity: O(1)


For interpolation search to work efficiently the array must be sorted and uniformly distributed otherwise the time complexity may go upto O(n) which is worse than binary search.

The Interpolation Search algorithm is faster than binary search in many cases, especially when the input array is uniformly distributed. However, if the data is not uniformly distributed or the element to be searched is at the beginning or end of the array, the performance of Interpolation Search can degrade to linear search.
*/