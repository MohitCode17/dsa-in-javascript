/* 
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - RECURSION  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

Recursion is a programming technique in which a function calls itself repeatedly until a certain condition is met. In JavaScript, recursion can be used to create and manipulate complex data structures.


The basic operation of recursion includes:

1. Base Case: This is the stopping condition for the recursive function. It is the point at which the function stops calling itself and returns a value.

2. Recursive Case: This is the condition where the function calls itself with a modified input. In this case, the function takes a problem and breaks it down into smaller sub-problems until it reaches the base case.

A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
*/


// ➡️ Example

function countDown(num){
// Base case
if(num === 0){
    console.log("Done!");
    return;
}

// Recursive case
console.log(num);
countDown(num - 1);
}

// countDown(10);



// ➡️ Example Find Factorial

function factorial(n) {
// Base case
if(n === 0) {
    return 1;
}

// Recursive case
return n * factorial(n-1)
}

// const result = factorial(5);
// console.log(result);



// 👉 INDIRECT RECURSION

// The Direct recursion occurs when a function calls itself directly from inside. Indirect recursion occurs when a function calls another function, and then that function calls the first function again.

let totalMoney = 189;
let totalOranges = 0;

// suppose total cost of one oranges is 10 rupees
function buyOranges(money){
// Base case
if(money >= 10){
    console.log(`I purchase ${totalOranges} apples and I have ${money} rupee left.`);
    buyMore(money);
}else{
    console.log(`I don't have more money. I bought total ${totalOranges} oranges`);
}
}

function buyMore(money){
totalOranges++;
buyOranges(money - 10);
}

// buyOranges(totalMoney);



// 👉 HEAD AND TAIL RECURSION

// Head and tail recursion are two types of recursive functions. The difference between them lies in the order in which recursive calls are made.

// In head recursion, the recursive call is the first operation performed within the function. This means that any operations that follow the recursive call will be executed after the base case is reached.


// ➡️ Here's an example of a head-recursive function:

// function countUp(num) {
//   if (num === 0) {
//     return;
//   } else {
//     countUp(num - 1);
//     console.log(num);
//   }
// }

// countUp(5);


// In tail recursion, the recursive call is the last operation performed within the function. This means that any operations that precede the recursive call will be executed before the base case is reached.

// ➡️ Here's an example of a tail-recursive function:

// function countDown(num) {
//   if (num === 0) {
//     return;
//   } else {
//     console.log(num);
//     countDown(num - 1);
//   }
// }

// countDown(5);



// ➡️ Reverse Array with Recursion:

let data = [23, 43, 45, 78, 98];
let temp;

// function reverseArray(arr, start, end){
//   console.log(arr);
//   // Base condition
//   if(start<=end){
//     temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     reverseArray(arr, start+1, end-1);
//   }
// }

// reverseArray(data, 0, data.length - 1);