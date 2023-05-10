/*
👉 FIBONACCI SEQUENCE

Problem statement:- Give a number 'n', find the first 'n' elements of the fibonacci sequence.

The first two numbers in the sequence are 0 and 1

fibancci(2) = [0,1]
fibancci(5) = [0,1,1,2,3]
fibancci(7) = [0,1,1,2,3,5,8]
*/


// 👉 Implementation

// function fibonacci(n){
//     let fibSeq = [0,1];
//     for(let i=2; i<n; i++){
//         fibSeq[i] = fibSeq[i-1] + fibSeq[i-2];
//     }
//     return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(7));


// Time Complexity : O(n)



// 👉 Implement using Recursion

function fibonacci(num) {
    // Base case
    if (num <= 1) {
      return num;
    }
    // Recursive case
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));

// Time Complexity : O(2^n) -> Horrible😠

// This is because each recursive call creates a new stack frame on the call stack, which takes up space in memory. The number of stack frames created is proportional to the value of num, since each call to fibonacci generates two more calls until the base case is reached.