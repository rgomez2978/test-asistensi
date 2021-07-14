
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

console.log('Return => ', vowelCount('I Am awesome and so are you'));

function vowelCount(str) {
    let vowels = 'aeiou';
    let strLower = str.toLowerCase().split("");
    return strLower.reduce((count, value) => {
        if (vowels.indexOf(value) !== -1) count[value] ? count[value]++ : count[value] = 1;
        return count;
    }, {});
}