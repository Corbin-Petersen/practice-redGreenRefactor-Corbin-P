const countVowels = require('../countVowels');

describe("countVowels", function() {
    test("Must take a number and return 0.", () => {
        expect(countVowels(674773)).toBe(0);
    });
    test("Must take a string and return number of vowels", () => {
        expect(countVowels("hello")).toBe(2);
    });
    test("Must take an empty string and return number of vowels", () => {
        expect(countVowels("")).toBe(0);
    });
    test("Must take a string and return number of vowels", () => {
        expect(countVowels("this is a string")).toBe(4);
    });
 });