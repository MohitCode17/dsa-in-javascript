/*
👉 Write a program to reverse an array.

Input  : arr[] = {1, 2, 3, 4}
Output : arr[] = {4, 3, 2, 1}
*/

function reverseArray(arr){
    let start = 0, end = arr.length-1;
    while(start <= end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

// const inputArray = [1, 2, 3, 4];
// console.log(reverseArray(inputArray));

/* 
Time complexity : O(n/2)

Space Complexity: O(1)

The reason for this time complexity is that the loop iterates over half of the elements in the array (from the first element to the middle element) and swaps each element with its corresponding element on the opposite side of the array.
*/



// 👉 Different Approach

function reverseArrayUsingInbuilt(arr){
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

const inputArray = [1, 2, 3, 4];
console.log(reverseArrayUsingInbuilt(inputArray));

/* 
Time complexity : O(n)

Space Complexity: O(n), because we use another array to store reverse value from existing array.
*/