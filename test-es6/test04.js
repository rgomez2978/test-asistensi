/*
Write a function called removeVowels which accepts a string and returns a new string with all
of the vowels (both uppercased and lowercased) removed. Every character in the
new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

console.log('Return => ', removeVowels('TIM'));

function removeVowels(str) {
    let vowels = 'aeiou';
    let strLower = str.toLowerCase().split("");
    return strLower.filter(value => vowels.indexOf(value) === -1).join("");
}
