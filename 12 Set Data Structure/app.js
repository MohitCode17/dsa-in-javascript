/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - SET 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 WHAT IS SET ?

A set is a data structure that can hold a collection of values. The values however must be unique.

Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set.

Sets do not maintain an insertion order

Sets are iterables. They can be used with a "for of" loop.


👉 ARRAY 🆚 SET

Arrays can contain duplicate values whereas Sets cannot

Insertion order is maintained in arrays but it is not the case with sets

Searching and deleting an element in the set is faster compared to arrays
*/


// 👉 Create a new set:

const numbers = new Set([1, 2, 3, 4]);

// 👉 Iterate map
for(num of numbers){
    console.log(num);
}

// 👉 Add new key-value
numbers.add(5);
numbers.add(6);

// 👉 Remove an element
numbers.delete(6);

// 👉 Checks if a value exists in the set
console.log(numbers.has(2));

// 👉 Retrieves the number of elements in the set
console.log(numbers.size);

// 👉 Clear the sets
numbers.clear();

console.log(numbers);