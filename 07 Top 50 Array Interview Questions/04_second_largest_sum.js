/*
👉 Write a program to find second largest number in an array.

Input  : arr[] = {12, 35, 1, 10, 34, 1}
Output : 34

Input  : arr[] = {10, 2, 5, 10};
Output : 5
*/


// 👉 Implement Brute Force Approach

function findSecondLargest(arr){
    const uniqueNumArray = Array.from(new Set(arr));    // O(n)
    
    uniqueNumArray.sort((a, b) => {     // O(n logn)
        return b - a;
    })

    if(uniqueNumArray.length >= 2){
        return uniqueNumArray[1];
    }else{
        return -1;
    }
}

// console.log(findSecondLargest([12, 35, 1, 10, 34, 1]));
// console.log(findSecondLargest([10, 2, 5, 10]));

/* Time Complexity: O(n logn) */


// 👉 Optimized Solution

function findSecondLargestOptimized(arr){
    let largest = -1;
    let secondLargest = -1;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(findSecondLargestOptimized([12, 35, 1, 10, 34, 1]));
console.log(findSecondLargestOptimized([10, 2, 5, 10]));
console.log(findSecondLargestOptimized([10, 10, 10]));

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/