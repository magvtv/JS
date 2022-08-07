
// let watches = [
//     'Patek',
//     'Mido',
//     'Jaquet Droz',
//     'Cartier',
//     'Eterna', 
//     'Omega'
// ];


// for (const i of watches) {
//     if (i[0] == "A" || i[0] == "E" || i[0] == "I" || i[0] == "O" || i[0] == "U") {
//         console.log("There is an " + i + " watch");
//     }
//     else {
//         console.log("There is a " + i + " watch");
//     }
// }

const DCCharacters = new Set([
    'Superman',
    'Wonder Woman',
    'Batman',
    'Green Lantern',
    'Aquaman',
    'Flash',
    'Vixen',
    'Green Arrow',
])

for (let i of DCCharacters) {
    console.log(i.substring(0, 4));
}

