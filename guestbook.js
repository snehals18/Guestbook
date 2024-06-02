document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment');
    const commentsContainer = document.getElementById('comments');

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.textContent = commentText;
            commentsContainer.appendChild(commentDiv);
            commentInput.value = '';
        }
    });
});