/*
👉 POWER OF TWO

Problem statement:- Give a positive integer 'n', determine if the number is a power of 2 or not.
*/


// 👉 Implementation

function powerOfTwo(n){
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

console.log(powerOfTwo(5));
console.log(powerOfTwo(8));
console.log(powerOfTwo(32));
console.log(powerOfTwo(7));

// Time Complexity : O(log n) Because every time we do half of n.