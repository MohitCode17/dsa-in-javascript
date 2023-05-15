/*
👉 Sum Zero Problem

Given an array of integers, return first non-empty subarray whose elements sum up to zero.

Input: [-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]
Output: [-4, 4]

*/


// 👉 Implementation

function findSumZeroPair(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
    return -1;
}

// console.log(findSumZeroPair([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]));

// Time Complexity: O(n^2)



// 👉 Optimize Implementation

/*
1. Take left Pointer on 0 index value
2. Take Right Pointer on last index value
3. Add both pointer's value, If it is greater than 0, then shift right pointer right--, and continue to loop
4. Add both pointer's value, If it is less than 0, then shift left pointer left++, and continue to loop
5. If equal to 0, then return value [?, ?]

*/

function findSumZeroPairOptimize(arr){
    let left = 0, right = arr.length-1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if( sum === 0){
            return [arr[left], arr[right]];
        }else if(sum < 0){
            left++;
        }else{
            right--;
        }
    }
    return "Not found";
}

console.log(findSumZeroPairOptimize([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]));