

function createSlug(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
module.exports = createSlug;