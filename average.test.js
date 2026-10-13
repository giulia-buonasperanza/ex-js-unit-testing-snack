/*Creare un test che verifichi la seguente descrizione:
"La funzione average calcola la media aritmetica di un array di numeri."*/
const average = require('./average');

test('average calcola la media aritmetica di un array di numeri', () => {
    const numbers = [1, 2, 3, 4, 5];
    const expectedAverage = 3;
    expect(average(numbers)).toBe(expectedAverage);
});