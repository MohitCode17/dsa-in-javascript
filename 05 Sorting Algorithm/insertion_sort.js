/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 INSERTION SORT ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// Insertion sort is a simple comparison-based sorting algorithm that builds the final sorted array one item at a time. It is efficient for small data sets, and its simplicity makes it easy to implement and understand.

// Insertion sort works similar to the sorting of playing cards in hands. It is assumed that the first card is already sorted in the card game, and then we select an unsorted card. If the selected unsorted card is greater than the first card, it will be placed at the right side; otherwise, it will be placed at the left side. Similarly, all unsorted cards are taken and put in their exact place.

/*
👉 The simple steps of achieving the insertion sort are listed as follows -

Step 1 - The first element in the array is assumed to be sorted. Take the second element and store it separately in "key".

Step2 - Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.

Step3 - Now, the first two elements are sorted. Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.

Step 4 - Similarly, place every unsorted element at its correct position.
*/

// 👉 Implementation

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const unsortedArr = [6, 21, -8, 12, 4, -10, 40, 34];
const sortedArr = insertionSort(unsortedArr);
console.log(sortedArr);

/*
Time Complexity: O(n^2) but performs better than bubble sort and selection sort for small datasets. It is often used in combination with other algorithms, such as merge sort or quicksort.

Space Complexity: O(1)
*/