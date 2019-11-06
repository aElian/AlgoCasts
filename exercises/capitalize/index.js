// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
// o: capitalized string i: string c: time complexity 

function capitalize(str) {
    let capitalized = [];
    for (let word of str.split(' ')) {
        capitalized.push(word[0].toUpperCase() + word.slice(1))
    }
    return capitalized.join(' ');
}

capitalize('a short sentence');

module.exports = capitalize;
