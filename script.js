document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('comment');
    const commentContainer = document.getElementById('comment-container');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const commentValue = commentInput.value.trim();

        if (commentValue !== '') {
            // Simulate AJAX request to a fake server (JSONPlaceholder)
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({ title: 'Comment', body: commentValue, userId: 1 }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Server response:', data);
                displayComment(data);
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('Please enter a comment before submitting.');
        }
    });

    function displayComment(commentData) {
        const newCommentElement = document.createElement('div');
        newCommentElement.classList.add('comment');
        newCommentElement.innerHTML = `<p>${commentData.body}</p>`;
        commentContainer.appendChild(newCommentElement);
        commentInput.value = '';
    }
    });

    

