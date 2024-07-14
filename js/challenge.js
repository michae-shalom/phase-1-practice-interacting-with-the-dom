document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
  
    function incrementCounter() {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  
    setInterval(incrementCounter, 1000); // Increment counter every second
  });

  document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
  
    plusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    minusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    // Rest of the code from Feature 1 (setInterval for timer)
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
  
    let likes = {}; // Object to store likes count for each number
  
    plusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    minusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    likeButton.addEventListener('click', function() {
      const currentNumber = counter.innerText;
      if (!likes[currentNumber]) {
        likes[currentNumber] = 1;
      } else {
        likes[currentNumber]++;
      }
  
      // Update or create the like item in the likes list
      let likeItem = document.getElementById(`like-${currentNumber}`);
      if (!likeItem) {
        likeItem = document.createElement('li');
        likeItem.id = `like-${currentNumber}`;
        likesList.appendChild(likeItem);
      }
      likeItem.innerText = `${currentNumber} has been liked ${likes[currentNumber]} times`;
    });
  
    // Rest of the code from Feature 1 (setInterval for timer)
  });

  document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
  
    let likes = {}; // Object to store likes count for each number
    let isPaused = false;
    let intervalId = setInterval(incrementCounter, 1000); // Start the timer initially
  
    function incrementCounter() {
      if (!isPaused) {
        counter.innerText = parseInt(counter.innerText) + 1;
      }
    }
  
    plusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    minusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    likeButton.addEventListener('click', function() {
      const currentNumber = counter.innerText;
      if (!likes[currentNumber]) {
        likes[currentNumber] = 1;
      } else {
        likes[currentNumber]++;
      }
  
      // Update or create the like item in the likes list
      let likeItem = document.getElementById(`like-${currentNumber}`);
      if (!likeItem) {
        likeItem = document.createElement('li');
        likeItem.id = `like-${currentNumber}`;
        likesList.appendChild(likeItem);
      }
      likeItem.innerText = `${currentNumber} has been liked ${likes[currentNumber]} times`;
    });
  
    pauseButton.addEventListener('click', function() {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(intervalId);
        pauseButton.innerText = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
      } else {
        intervalId = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
    const likesList = document.querySelector('.likes');
  
    let likes = {}; // Object to store likes count for each number
    let isPaused = false;
    let intervalId = setInterval(incrementCounter, 1000); // Start the timer initially
  
    function incrementCounter() {
      if (!isPaused) {
        counter.innerText = parseInt(counter.innerText) + 1;
      }
    }
  
    plusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    minusButton.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    likeButton.addEventListener('click', function() {
      const currentNumber = counter.innerText;
      if (!likes[currentNumber]) {
        likes[currentNumber] = 1;
      } else {
        likes[currentNumber]++;
      }
  
      // Update or create the like item in the likes list
      let likeItem = document.getElementById(`like-${currentNumber}`);
      if (!likeItem) {
        likeItem = document.createElement('li');
        likeItem.id = `like-${currentNumber}`;
        likesList.appendChild(likeItem);
      }
      likeItem.innerText = `${currentNumber} has been liked ${likes[currentNumber]} times`;
    });
  
    pauseButton.addEventListener('click', function() {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(intervalId);
        pauseButton.innerText = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
      } else {
        intervalId = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
      }
    });
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        commentItem.innerText = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = ''; // Clear the input field after submitting
      }
    });
  });
  