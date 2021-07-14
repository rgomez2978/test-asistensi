
/*
Write a function called findInObj which accepts an array of objects, a key, and some
value to search for and returns the first found value in the arrayt.
Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

const array = [
    { first: 'Elie', last: "Schoppik" },
    { first: 'Tim', last: "Garcia", isCatOwner: true },
    { first: 'Matt', last: "Lane" },
    { first: 'Colt', last: "Steele", isCatOwner: true }
];

console.log('Return => ', findInObj(array, 'isCatOwner', true));

function findInObj(arr, key, searchValue) {
    let secondArray = arr.filter(value => (value[key] !== undefined) && (value[key] === searchValue));
    return secondArray[0];
}