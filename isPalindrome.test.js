/* Snack 5
Creare un test che verifichi la seguente descrizione:
"La funzione isPalindrome verifica se una stringa è un palindromo."*/
const isPalindrome = require('./isPalindrome');

test('isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('Anna')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
});