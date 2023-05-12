/*
👉 Write a program to find minimum and maximum element in array.

Input  : arr[] = {3, 4, 1, -5, 10}
Output: Min = -5, Max = 10
*/


function findMinMax(arr){
    // let assume first element as min or max
    let min = arr[0];
    let max = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }else if(arr[i] > max){
            max = arr[i];
        }
    }
    
    return [min, max];
}

const [min, max] = findMinMax([3, 4, 1, -5, 10]);
console.log(`Minimum element: ${min}\n Maximum element: ${max}`);

/* 
Time complexity : O(n)
Space Complexity: O(1)
*/