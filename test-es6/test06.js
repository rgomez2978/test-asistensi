/*
Write a function called extractKey which accepts an array of objects and some key and
returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

const array = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
];

console.log('Return => ', extractKey(array, 'name'));

function extractKey(arr, key) {
    return arr.map(value => value[key]);
}
