/*funzione che restituisce il testo tutto il lowercase*/

/*function createSlug(str) {
    return str.toLowerCase();
}*/


/*funzione che restituisce il testo tutto il lowercase e aggiunge - agli spazi*/
function createSlug(str) {
    if ( typeof str !== 'string' ||str.trim() === '') {
        throw new Error('Inserisci una stringa valida');
    }
    
    return str.toLowerCase().replace(/\s+/g, '-');
}
module.exports = createSlug;