

function findPostById(posts, id) {
    if (typeof id !== 'number') {
        throw new Error('L\'id deve essere un numero');
    }

    const post = posts.find(p => p.id === id);

    if (!post) {
        throw new Error('Post non trovato');
    }

    if (!post.id || !post.title || !post.slug) {
        throw new Error('Post non valido');
    }

    return post;
}

module.exports = findPostById;