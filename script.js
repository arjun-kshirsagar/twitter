const tweetForm = document.getElementById('tweet-form');
const postContainer = document.querySelector('.post-container');

tweetForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission
  
  const tweetContent = document.getElementById('tweet-content').value;
  
  const tweetDiv = document.createElement('div');
  tweetDiv.classList.add('tweet');
  
  const tweetText = document.createElement('p');
  tweetText.textContent = tweetContent;
  
  const commentForm = document.createElement('form');
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    const commentInput = this.querySelector('.comment-input');
    const commentContent = commentInput.value;
    
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    
    const commentText = document.createElement('p');
    commentText.textContent = commentContent;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      tweetDiv.removeChild(commentDiv);
    });
    
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(deleteButton);
    
    tweetDiv.appendChild(commentDiv);
    
    commentInput.value = '';
  });
  
  const commentInput = document.createElement('input');
  commentInput.classList.add('comment-input');
  commentInput.type = 'text';
  commentInput.placeholder = 'Reply to this tweet...';
  
  const commentButton = document.createElement('button');
  commentButton.textContent = 'Reply';
  
  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentButton);
  
  tweetDiv.appendChild(tweetText);
  tweetDiv.appendChild(commentForm);
  
  const postDiv = document.createElement('div'); // Create a new div for each tweet
  postDiv.classList.add('post-container'); // Add the class 'post-container' to the new div
  postDiv.appendChild(tweetDiv); // Append the tweet div to the new div
  
  postContainer.appendChild(postDiv); // Append the new post div to the main post container
  
  document.getElementById('tweet-content').value = '';
});
