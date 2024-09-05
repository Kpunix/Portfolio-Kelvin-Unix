document.addEventListener('DOMContentLoaded', () => {
    const showFormButton = document.getElementById('show-form');
    const postForm = document.getElementById('post-form');
    const submitPostButton = document.getElementById('submit-post');
    const postContent = document.getElementById('post-content');
    const feed = document.getElementById('feed');

    // Toggle post form visibility
    showFormButton.addEventListener('click', () => {
        postForm.classList.toggle('hidden');
    });

    // Add new post
    submitPostButton.addEventListener('click', () => {
        const content = postContent.value.trim();
        if (content) {
            const post = document.createElement('div');
            post.className = 'post';
            post.textContent = content;
            feed.prepend(post); // Add new post to the top of the feed
            postContent.value = ''; // Clear the textarea
            postForm.classList.add('hidden'); // Hide the form
        }
    });
});
