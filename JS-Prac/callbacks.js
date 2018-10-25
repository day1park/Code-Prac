const posts = [
    {
        title: 'todays blog',
        body: 'post about today '
    },
    {
        title: 'tomorrows blog',
        body: 'blog prep for tomorrow'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);

}

getPosts();

createPost({ title: 'yesterdays blog', body: 'a post about yesterday' });