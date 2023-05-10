/*
👉 FACTORIAL

Problem statement:- Give a integer 'n', find the factorial of that interger.

The product of all positive integer less than or equal to the given positive integer.

factorial of Zero is "1"

factorial(3) = 3*2*1 = 6
factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120
*/


// 👉 Implementation

// function factorial(n){
//     let result = 1;
//     if(n === 0){
//         return result;
//     }
//     for(let i=2; i<=n; i++){
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// Time Complexity : O(n)



// 👉 Implement using Recursion

function factorial(n){
    // Base case
    if(n === 0 || n === 1){
        return 1;
    }
    // Recursive case
    return n * factorial(n-1);
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


// Time Complexity : O(n)