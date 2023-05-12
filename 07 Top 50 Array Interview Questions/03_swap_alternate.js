/*
👉 Write a program to swap alternative element of an array.

Input  : arr[] = {1, 2, 3, 4, 5, 6}
Output : arr[] = {2, 1, 4, 3, 6, 5}
*/

// 👉 Implement

function swapAlternate(arr){
    for(let i=0; i<arr.length; i+=2){
        if(i+1 < arr.length){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
    return arr;
}
const inputArray = [1, 2, 3, 4, 5, 6];
console.log(swapAlternate(inputArray));


/* 
Time complexity : O(n)
Space Complexity: O(1)
*/