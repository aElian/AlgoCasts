// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//o:int i:int c:work for negative numbers 

function reverseInt(n) {
    let int = 0;
    let reversedStr = Math.abs(n).toString().split('').reverse().join('');
    int = parseInt(reversedStr);
    return Math.sign(n) * int;
}

module.exports = reverseInt;
