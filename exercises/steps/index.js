// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
//o: console.log step shape using '#' with number of steps equal to n i: int
//c: correct number of empty spaces for each line

function steps(n) {
    for (let i = 0; i < n; i++) {
        let pound = '#';
        let space = ' ';
        let expression = pound.repeat(i+1) + space.repeat(n-(i + 1));
        console.log(expression);
    }
}

module.exports = steps;
