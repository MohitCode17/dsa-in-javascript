/*
👉 PRIME NUMBER

Problem statement:- Give a natural number 'n', determine if the number is prime number or not.

A number that can be divided exactly only by itself and 1 called prime number, for example 7, 17 and 41

isPrime(5) = true
isPrime(4) = false
*/


// 👉 Implementation

function isPrime(n){
    if(n < 2) {
        return false; 
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(9));

// Time Complexity : O(n)