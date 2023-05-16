/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - OBJECT  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 WHAT IS OBJECT ?

An object is an unordered collection of key-value pairs/ The key must either be a string or symbol data type where as the value be of any data type.

To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.

An object is not an iterable. You cannot use it with a "for of" loop.
*/


const obj = {
    name: 'Mohit',
    age: 25,
    "phone-number": 1234321212,
    myIntro: function(){
        return `Hello I'm ${this.name}, I'm ${this.age} years old full stack developer from india`;
    },
    demo: 'Demo',
}

// 👉 Access Elements
console.log(obj.name);
console.log(obj["phone-number"]);

// 👉 Insert New Element
obj.skills = ["Web development", "Web design", "ML"];
console.log(obj);

// 👉 Delete Existing Element
delete obj.demo;

// 👉 Update Existing Element
obj.name = "Mohit Gupta"

console.log(obj);


// 👉 Call Method of Object
console.log(obj.myIntro());



/*
👉 OBJECT METHODS

1. Object.Keys() : This static methods returns an array of given object's own enumerable string-keyed property names.

2. Object.values() : This static methods return an array of given object's own enumerable string-keyed property values.

3. Object.entries() : This static methods return an array of given object's own enumerable string-keyed property key-values pairs.
*/ 

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));



/*
👉 Object- Big-O Time Complexity

1. insert: O(1)
2. Remove: O(1)
3. Access: O(1)
4. Search: O(1)
5. Object.keys(): O(n)
6. Object.values(): O(n)
7. Object.entries(): O(n)
*/