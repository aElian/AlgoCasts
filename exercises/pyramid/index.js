// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1) 1
//       '#'
//   pyramid(2) 3
//       ' # '
//       '###'
//   pyramid(3) 5
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)  7
//  '---#---'
//  '--###--'   
//  '-#####-'
//  '#######'
//   pyramid(5)  9
//'----#----'
//'---###---'
//'--#####--'
//'-#######-'
//'#########'

//o: console log pyramid shape using '#'  i:int c:iterative and recursive solution


function pyramid(n) {
    const midpoint = Math.floor((n * 2 - 1)/2);
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < n * 2 - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' '
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;
