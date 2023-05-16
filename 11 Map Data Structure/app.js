/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - MAP 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 WHAT IS MAP ?

A map is an ordered collection of key-value pairs. Both keys and values can be any data type.

To retrieve a value, you can use the corresponding key.

Map are iterables. They can be used with a "for of" loop.


👉 OBJECT 🆚 MAP

Syntax and Key Types:
    Objects: Objects are created using object literals or the new Object() constructor. The keys in objects are always strings or symbols.

    Maps: Maps are created using the new Map() constructor. The keys in maps can be of any data type, including objects, functions, or primitive types.

Iteration and Order:
    Objects: The iteration order of keys in objects is not guaranteed, and it may vary across different JavaScript engines. Keys are not sorted in any particular order.

    Maps: Maps preserve the order of key-value pairs and provide methods for iterating over them in the insertion order.

Methods and Functionality:

    Objects: Objects have built-in methods and properties like Object.keys(), Object.values(), and Object.entries() to manipulate and retrieve information from objects.

    Maps: Maps provide a rich set of methods like set(), get(), has(), delete(), and clear() for working with key-value pairs. They also have a size property to determine the number of entries.

Performance and Use Cases:

    Objects: Objects are optimized for a wide range of use cases and are often used for general-purpose data storage and retrieval. They are particularly efficient for small to medium-sized collections and when property names are known in advance.

    Maps: Maps are generally preferred when the collection size is unknown, or when key-value pairs need frequent additions or removals. Maps are also useful when the keys are dynamically generated or when the order of entries matters.

*/


// 👉 Create a new map:

const groceries = new Map([
    ["Cabage", 40],
    ["Mango", 120],
    ["Milk", 90],
])

// 👉 Iterate map

for(const [key,value] of groceries){
    // console.log(key, value);
}

// 👉 Set new key-value
groceries.set("Brown bread", 35);
groceries.set("Sugar Packet", 55);

// 👉 Get existing key-value
console.log(groceries.get("Milk")); // 90

// 👉 Get total size of map
console.log(groceries.size);

// 👉 Delete element
groceries.delete("Sugar Packet");

// 👉 Check if specific key-value exist
console.log(groceries.has("Milk")); // true

// 👉 Clear Map
groceries.clear();

console.log(groceries);