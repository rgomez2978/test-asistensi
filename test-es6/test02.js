/*
Write a function called find which accepts an array and a value and returns the
first element in the array that has the same value as the second parameter
or undefined if the value is not found in the array.
Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

const array = [1, 2, 3, 4, 5];

console.log('Return => ', find(array, 2));

function find(arr, searchValue) {
    return arr.find(value => value === searchValue);
}