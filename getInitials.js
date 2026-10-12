/* La funzione getInitials restituisce le iniziali di un nome completo. */

function getInitials(fullName) {

    const names = fullName.split(' ');

    const initials = names.map(name => name.charAt(0).toUpperCase());

    return initials.join('');

}

module.exports = getInitials;