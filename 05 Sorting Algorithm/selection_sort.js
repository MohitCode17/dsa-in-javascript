/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 SELECTION SORT ALGORITHM 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from an unsorted portion of the array and swapping it with the first element of that unsorted portion.

// Step:1 Considered first element is minimum.
// Step:2 Check elements next to the first element, if any other element is less than first element swap them
// Step:3 Do this until array will sort



// 👉 Implementation

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let minValue = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minValue]){
                minValue = j;
            }
        }
        if(minValue !== i){
            [arr[i], arr[minValue]] = [arr[minValue], arr[i]]
        }
    }
    return arr;
}

const unsortedArr = [6, 21, -8, 12, 4, -10, 40, 34];
const sortedArr = selectionSort(unsortedArr);
console.log(sortedArr);


/*
Time Complexity: O(n^2)
Space Complexity: O(1)
*/


// 👉 Despite its quadratic time complexity, selection sort can be useful for small arrays or as a building block for more complex algorithms. However, it is slightly more efficient than bubble sort.