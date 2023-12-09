function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts/';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments/';

    let loadPostsButton = document.getElementById('btnLoadPosts');
    let viewPostsButton = document.getElementById('btnViewPost');
    let postsSelectElement = document.getElementById('posts');
    let postTitleElement = document.getElementById('post-title');
    let postBodyElement = document.getElementById('post-body');
    let postCommentsUl = document.getElementById('post-comments');

    let allPosts = {};

    loadPostsButton.addEventListener('click', loadPosts);
    viewPostsButton.addEventListener('click', getComments);

    async function getComments() {
        postCommentsUl.innerHTML = '';
        postBodyElement.innerHTML = '';

        let postId = postsSelectElement.value;

        postTitleElement.textContent = allPosts[postId].title;
        postBodyElement.textContent = allPosts[postId].body;
        
        let response = await fetch(commentsURL);
        let comments = await response.json();

        for (const commentInfo of Object.values(comments)) {
            if (commentInfo.postId === postId) {
                let newLiElement = document.createElement('li');
                newLiElement.id = commentInfo.id;
                newLiElement.textContent = commentInfo.text;
                postCommentsUl.appendChild(newLiElement);
            }
        }
    }

    async function loadPosts() {
        postsSelectElement.innerHTML = '';
        let response = await fetch(postsURL);
        allPosts = await response.json();

        for (const [id, postInfo] of Object.entries(allPosts)) {
            let newOptionEl = document.createElement('option');
            newOptionEl.value = id;
            newOptionEl.textContent = postInfo.title;
            postsSelectElement.appendChild(newOptionEl);
        }
    }
}

attachEvents();