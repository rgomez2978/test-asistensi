/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
Examples:
    hasNoDuplicates([1,2,3,2]) // false
    hasNoDuplicates([1,2,3]) // true
*/

const array = [1, 2, 3, 2];

console.log('Return => ', hasNoDuplicates(array));

function hasNoDuplicates(arr) {
    return arr.every((value, index) => arr.lastIndexOf(value) === index);
}