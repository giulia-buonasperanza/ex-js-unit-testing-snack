/*funzione che restituisce il testo tutto il lowercase*/

/*function createSlug(str) {
    return str.toLowerCase();
}*/


/*funzione che restituisce il testo tutto il lowercase e aggiunge - agli spazi*/
function createSlug(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
module.exports = createSlug;