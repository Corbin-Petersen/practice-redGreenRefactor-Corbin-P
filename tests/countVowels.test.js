const countVowels = require('../countVowels');

describe("countVowels", function() {
    test("Must take a string and return the number of vowels.", () => {
        expect(countVowels(674773)).toBe(0);
    });
 });