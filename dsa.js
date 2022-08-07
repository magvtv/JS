/*
    learning json - which is basically objects in js
    importing data from an api (marvel, cars)
    learning how to immediately invoke function expression (IIFE)

    really need to know how to manipulate .json file to get certain items
*/

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '16806452c5mshfb321706c9a62fbp118a73jsn7602a14f4b61',
        'X-RapidAPI-Host': 'mcu-comics-and-characters.p.rapidapi.com'
    }
};

fetch('https://mcu-comics-and-characters.p.rapidapi.com/mcu/characters', options)
    .then(
        response => response.json()
    )
    .then(
        data => {
            console.log(data)
        }
    )
    .catch(
        err => console.warn(err)
    );

// let car = "Aston Martin Valhalla";
// const changeCar = (() => {
//     return {
//         toPorsche: () => {
//             car = "Porsche Panamera";
//             return car;
//         },
//         toFerari: () => {
//             car = "Ferari Roma"
//             return car;
//         },
//         toBugatti: () => {
//             car = "Buggati La Voiture Noire";
//             return car;
//         },
//         toLamborghini: () => {
//             car = "Lamborghini Urus Graphite Capsule";
//             return car;
//         }
//     }
// })();


// console.log(
//     changeCar.toFerari()
// );


const lyric = (place) => {
    console.log("I got fans in " + place + "... Big Fans!")
}

const adlib = (callback) => {
    let place = "Puerto Rico";
    callback(place);
}

adlib(lyric)

