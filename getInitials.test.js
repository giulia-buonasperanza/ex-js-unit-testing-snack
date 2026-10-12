/*Creare un test che verifichi la seguente descrizione:
"La funzione getInitials restituisce le iniziali di un nome completo." */
const getInitials = require('./getInitials');


test('getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Jane Doe')).toBe('JD');
});