/*Creare un test che verifichi le seguenti descrizioni:
"La funzione findPostById restituisce il post corretto dato l’array di post e l’id"*/

const findPostById = require('./findPostById');

const posts = [
    { id: 1, title: 'Primo post', slug: 'primo-post' },
    { id: 2, title: 'Secondo post', slug: 'secondo-post' },
    { id: 3, title: 'Terzo post', slug: 'terzo-post' }
];

const invalidPosts = [
    { id: 1, title: 'Primo post' }
];

test('findPostById restituisce il post corretto dato l\'array di post e l\'id', () => {
    const postId = 2;
    const expectedPost = { id: 2, title: 'Secondo post', slug: 'secondo-post' };
    const result = findPostById(posts, postId);
    expect(result).toEqual(expectedPost);
    expect(() => findPostById(posts, '2')).toThrow('L\'id deve essere un numero');
    expect(() => findPostById(posts, 99)).toThrow('Post non trovato');
    expect(() => findPostById (invalidPosts, 1)).toThrow('Post non valido');
});