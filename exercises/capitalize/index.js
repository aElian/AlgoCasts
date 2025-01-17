// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
// o: capitalized string i: string c: language? time complexity? 

function capitalize(str) {
//wouldn't work for other languages potentially, like Spanish 

    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
 }


module.exports = capitalize;

// function capitalize(str) {
//     let capitalized = [];
//     for (let word of str.split(' ')) {
//         capitalized.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return capitalized.join(' ');
// }