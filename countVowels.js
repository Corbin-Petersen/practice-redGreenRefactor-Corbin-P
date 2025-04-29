function countVowels(str) {
    if (typeof str !== 'string') {
        str = ''
    }
    
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    let countVowels = 0;
    
    let newStrArr = str.toUpperCase().split("");

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(newStrArr[i])) {
            countVowels++;
        } 
    }
    return countVowels;
}

module.exports = countVowels;