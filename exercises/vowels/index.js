// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
//o:integer i:string c: include both capital and lowercase vowels

function vowels(str) {
    str = str.toLowerCase();
    let count = 0;
    let checker = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (checker.includes(char)) {
            count ++
        }
    }
    return count;
}

module.exports = vowels;
