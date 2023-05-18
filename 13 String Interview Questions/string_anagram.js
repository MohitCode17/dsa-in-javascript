/*
👉 Check whether two Strings are anagram of each other

An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.

Input: str1 = “listen”  str2 = “silent”
Output: “Anagram”
*/

// Create Map for First String and store how many character are comes how many times.
// {l:1, i:1, s:1, t:1, e:1, n:1}

// In second string, check if character of second string are present in first one, if true then -1 each character else return false

function isAnagram(string1, string2){
    
    if(string1.length !== string2.length){
        return false;
    }

    let charCounter = {};

    for(let char of string1){
        charCounter[char] = (charCounter[char] || 0) + 1;
    }
    // console.log(charCounter);

    for(let char of string2){
        if(!charCounter[char]){
            return false;
        }

        charCounter[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Angel", "Angle"));
console.log(isAnagram("Kafe", "Face"));