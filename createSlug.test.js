const createSlug = require('./createSlug');


/*Creare un test che verifichi la seguente descrizione:
"La funzione createSlug restituisce una stringa in lowercase."*/

/*test('createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('Hello World')).toBe('hello world');
});*/


/*Creare un test che verifichi la seguente descrizione:
"La funzione createSlug sostituisce gli spazi con -."*/

test('createSlug aggiunge - agli spazi', () => {
    expect(createSlug('Hello World')).toBe('hello-world');
});