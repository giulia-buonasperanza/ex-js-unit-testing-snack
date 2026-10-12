/*Creare un test che verifichi la seguente descrizione:
"La funzione createSlug restituisce una stringa in lowercase."*/

const createSlug = require('./createSlug');

test('createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('Hello World')).toBe('hello-world');
});