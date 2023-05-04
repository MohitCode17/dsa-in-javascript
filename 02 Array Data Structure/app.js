/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟  DATA STRUCTURE - ARRAY  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

👉 WHAT IS AN ARRAY ?

An array is a basic data structure that stores a collection of elements of the same data type in contiguous memory locations. The array is accessed using an index which starts from 0 and goes up to the length of the array minus 1.


👉 Some basic operations that can be performed on an array include:

1. Accessing an element: You can access any element in the array using its index. For example, if you have an array named arr and you want to access the element at index 3, you can do so by using arr[3].

2. Inserting an element: You can insert a new element into an array at any given index. To do this, you need to shift all the elements that come after the insertion point one position to the right. Then you can insert the new element into the now-empty position.

3. Deleting an element: You can delete an element from an array at any given index. To do this, you need to shift all the elements that come after the deletion point one position to the left. Then you can overwrite the element you want to delete with the next element.

4. Searching an element: You can search for an element in an array by iterating through all the elements and comparing each element to the one you're looking for. If the element is found, you can return its index. Otherwise, you can return a value indicating that the element is not present in the array.

5. Sorting an array: You can sort the elements in an array using a variety of algorithms, such as bubble sort, insertion sort, or quicksort.
*/



// ➡️ Accessing an element

// function accessElement(arr, index) {
//   return arr[index];
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// let element = accessElement(data, 2); // returns the element at index 2, which is 30
// console.log(element);



// ➡️ Insert an element

// function insertElement(arr, index, element) {
//   let newArr = [];

//   for(let i=0; i<arr.length; i++){
//     if(i === index){
//       newArr.push(element);
//     }
//     newArr.push(arr[i]);
//     console.log(newArr);
//   }

//   return newArr;
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = insertElement(data, 3, 50);
// console.log(result);


/*
Time Complexity: The time complexity of insertELment() is O(n) linear because we loop through the arr.length elements. If length of array will be increased then time complexity also increased. So time is direclty proportional to array length.

Space Complexity: The space complexity of the insertElement() is O(n) linear because it creates a new array "newArr" to hold the modified elements.

To reduce the space complexity of insertElement() to O(1), we can direclty modify the original array. Here the function looks like: 👇
*/

// function insertElement(arr, index, element){
//   for(let i=arr.length-1; i>=index; i--) {
//     arr[i+1] = arr[i];
//   }
//   arr[index] = element;
//   return arr;
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = insertElement(data, 3, 50);
// console.log(result);



// Using Built-in method

// function insertElement(arr, index, element) {
//   arr.splice(index, 0, element);
//   return arr;
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = insertElement(data, 3, 50);
// console.log(result);

/*
The time complexity of the splice() method in JavaScript for inserting an element into an array at a specific index is O(n), where n is the length of the array, because in the worst case scenario, all the elements to the right of the insertion point have to be shifted one position to the right.

The space complexity of this function is also O(n), because the splice() method modifies the original array in place, but it may create a new copy of the array if the underlying implementation of the splice() method requires it. However, the amount of additional memory used by the splice() method is typically small compared to the size of the array, so the space complexity is still considered to be O(n).
*/



// ➡️ Delete an element

// function deleteElement(arr, index){
//   for(let i=index; i<arr.length; i++){
//     arr[i] = arr[i+1];
//   }
//   arr.length = arr.length - 1;
//   return arr;
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = deleteElement(data, 3);
// console.log(result);


/*
The time complexity of this function for deleting an element at a specific index in an array is O(n), where n is the length of the array, because in the worst case scenario, all the elements to the right of the deleted element have to be shifted one position to the left.

The space complexity of this function is O(1), because it modifies the original array in place without creating any additional data structures.
*/


// Using Built-in method

// function deleteElement(arr, index){
//   arr.splice(index, 1);
//   return arr;
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = deleteElement(data, 3);
// console.log(result);


/*
The time complexity of the splice() method for deleting an element at a specific index in an array is O(n), where n is the length of the array.

The space complexity of this function is also O(n), because the splice() method modifies the original array in place, but it may create a new copy of the array.
*/


// Optimized Method

// function deleteElement(arr, index) {
//   let lastIndex = arr.length - 1;  // 89
//   [arr[index], arr[lastIndex]] = [arr[lastIndex], arr[index]];  // 52, 89 = 89, 52 this line of code shift 52 which sould be deleted to end of an array
//   arr.pop();
//   return arr;
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = deleteElement(data, 3);
// console.log(result);


/*
This function first calculates the index of the last element in the array. It then swaps the element to be deleted with the last element using array destructuring assignment. Finally, it removes the last element of the array using the pop() method, which has a time complexity of O(1). This approach avoids the need to shift any elements in the array, resulting in a faster operation. However, it may change the order of the elements in the array, which may or may not be desirable depending on the use case.

*/



// ➡️ Search Element

// function searchElement(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = searchElement(data, 71);
// console.log(result);


/*
The time complexity of this function for searching an element in an array is O(n), where n is the length of the array, because in the worst case scenario, it has to iterate through the entire array to find the element or determine that it is not present.

The space complexity of this function is O(1), because it does not create any additional data structures besides the input array and the search element.

*/


// Useing Built-in method

// function searchElement(arr, element) {
//   return arr.indexOf(element);
// }

// const data = [9, 45, 87, 52, 71, 41, 4, 89];
// const result = searchElement(data, 71);
// console.log(result);


/*
Time Complexity: O(n)
Space Complexity: O(1)

*/


// ➡️ Sort Array

// let data = [40, 30, 12, 25];

// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[j] > data[j + 1]) {
//       let temp = data[j];
//       data[j] = data[j + 1];
//       data[j + 1] = temp;
//     }
//   }
// }

// console.log(data);

/*
Sort using Bubble Sort

Time complexity: O(n^2);
Space complexity: O(1)

*/



// ➡️ Merge Two Array

// function mergeArrays(arr1, arr2) {
//     const mergedArray = [];
//     let i = 0;
//     let j = 0;
  
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         mergedArray.push(arr1[i]);
//         i++;
//       } else {
//         mergedArray.push(arr2[j]);
//         j++;
//       }
//     }
  
//     while (i < arr1.length) {
//       mergedArray.push(arr1[i]);
//       i++;
//     }
  
//     while (j < arr2.length) {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
  
//     return mergedArray;
// }
  
// const arr1 = [3, 7, 12, 34, 56, 90];
// const arr2 = [4, 9, 25, 45];
// const result = mergeArrays(arr1, arr2);
// console.log(result);
  

/*
Time complexity: O(n)
Space complexity: O(n)
*/




// 👉 Learn More about Array: https://github.com/MohitCode17/javascript-course/tree/main/Lecture05%20Array