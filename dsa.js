/*
Arrays
    Trying to understand and do questions on this.
    Methods such as shift & unshift, pop, push. Shift removes the first item in the array, unshift adds an item at index[0] of the array.  
    Arrays are objects. Array indices are the object keys.
    Recommended o use arrays for ordered collection of items. Otherwise, using 

Mulitdimensional array
    This are arrays within an array
 */

// let dailyActions = []
// dailyActions.unshift('Bible', 'Book one chapter')
// dailyActions.push('Exercise')
// console.log(dailyActions)



let clothBrandData = [
    ['Dolce & Gabbana', 1985],
    ['Chanel', 1910],
    ['Ralph Lauren', 1967],
    ['Huga Boss', 1924],
    ['Nordstrom', 1901]
];


// clothBrandData.forEach((brand) => {
//     brand.forEach((yr) => {
//         console.log(yr)
//     });
// });

// let i, j;
// for (i of clothBrandData) {
//     for (j of i) {
//         console.log(j)
//     }
// }

// for (let x = 0; x < clothBrandData.length; x++) {
//     let innerArray = clothBrandData[x].length;
//     for (let y = 0; y < innerArray; y++) {
//         console.log(clothBrandData[x][y]);
//     }
// }