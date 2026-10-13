

function isPalindrome(str) {
    str = str.toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

module.exports = isPalindrome;