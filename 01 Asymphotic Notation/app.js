/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 INTRODUCTION 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟


👉 WHAT IS AN ALGORITHM ?

An algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of inputs and produces the desired output.

Example:
An algorithm to add two numbers:

1. Take two number inputs
2. Add numbers using the + operator
3. Display the result


👉 WHAT IS DATA STRUCTURE ?

Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.
Depending on your requirement and project, it is important to choose the right data structure for your project. 

Types of Data Structure:
Basically, data structures are divided into two categories:

1. Linear data structure
2. Non-linear data structure


➡️ Linear: In linear data structures, the elements are arranged in sequence one after the other. Since elements are arranged in particular order, they are easy to implement.

However, when the complexity of the program increases, the linear data structures might not be the best choice because of operational complexities.

➡️ Non Linear: It is a form of data structure where the data elements don't stay arranged linearly or sequentially.


Popular linear data structures are:
1. Array Data Structure
2. Stack Data Structure(LIFO principle)
3. Queue Data Structure(FIFO principle)
4. Linked List Data Structure

Non linear data structures:
1. Graph Data Structure
2. Trees Data Structure


👉 ASYMPTOTIC ANALYSIS AND MORE:

The efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.

An algorithm may not have the same performance for different types of inputs. With the increase in the input size, the performance will change. The study of change in performance of the algorithm with the change in the order of the input size is defined as asymptotic analysis.

There are mainly three asymptotic notations:

1. Big-O notation
2. Omega notation
3. Theta notation


Big-O Notation (O-notation): Big-O notation represents the upper bound of the running time of an algorithm. Thus, it gives the worst-case(longest running time) complexity of an algorithm. It is widely used to analyze an algorithm as we are always interested in the worst-case scenario.


Omega Notation (Ω-notation): Omega notation represents the lower bound of the running time of an algorithm. Thus, it provides the best case complexity of an algorithm.


Theta Notation (Θ-notation): Theta notation encloses the function from above and below. Since it represents the upper and the lower bound of the running time of an algorithm, it is used for analyzing the average-case complexity of an algorithm.


👉 Analysis Time Complexity

1. Constant Time : O(1)

for (i=0; i<10; i++) {
    console.log(i);
}

2. Linear Time : O(n)

for (i=0; i<n; i++) {
    console.log(i);
}

3. Quadratic Time : O(n^2)

for (i=0; i<n; i++) {   -------> linear time n
    for (j=0; j<n; j++) {   --------> linear time n, time will be n*n
        console.log(j);
    }   
}

4. Logarithmic Time : O(log n): Use case in Binary Search



Equation                                            Time Complexity in Big-O(Upper Bound)

1. f(n) = 2n^2 + 3n                                 O(n^2)                
2. f(n) = 4n^4 + 3n^3                               O(n^4)
3. f(n) = n^2 + logN                                O(n^2)
4. f(n) = 12001                                     O(1)
5. f(n) = 3n^3 + 2n^2 + 5                           O(n^3)
6. f(n) = n^3/300                                   O(n^3)
7. f(n) = 5n^2 + logN                               O(n^2)    
8. f(n) = n/4                                       O(n)
*/



// More examples of time complexity:

// const funnyNum = (arr) => {
//     for(let i=0; i<arr.length; i++) {
//         if(i === 3) return arr[i];
//     }
// }

// Time complexity: O(n)


// const funnyNum = (arr) => {
//     return arr[3];
// }

// Time complexity: O(1)

// const nums = [23, 43, 54, 56, 78, 98, 76];
// console.log(funnyNum(nums));


// function sumOperation(n) {
//     return (n * (n + 5)) / 2;
// }

// Time complexity: O(1)

// console.log(sumOperation(1000));



// function GoingUpDown(n) {
//     console.log("Going forward!");  // 1 operation
//     for(let i =0; i<n; i++){    //  n no's operation
//         console.log(i);     
//     };
//     console.log("At the end, Going back!"); // 1 operation
//     for(let j=n; j>=0; j--){    // n no's operation
//         console.log(j);
//     };
//     console.log("At the start");    // 1 operation

//     // 2n + 3 operations = O(n)
// }

// GoingUpDown(10);


// function printBoth(n) {
//     for(let i=0; i<n; i++){     // n
//         for(let j=0; j<n; j++){     // n
//             console.log(i, j);
//         }   
//     }
//     // o(n^2)
// }