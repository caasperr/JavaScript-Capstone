import postComment from './postComments.js';

const renderData = (element) => {
  const container = document.getElementById('comment-modal');
  container.innerHTML = `<div id="closebtn">
  <a href="#">
    <span class="left">
      <span class="circle-left"></span>
      <span class="circle-right"></span>
    </span>
    <span class="right">
      <span class="circle-left"></span>
      <span class="circle-right"></span>
    </span>
  </a>
</div>
  <div class="product-info">
    <div class="product-image">
      <img src="${element.meals[0].strMealThumb}" alt="" width="300" />
    </div>
    <div class="title gradient-Text"><h2>${element.meals[0].strMeal}</h2></div>
    <div class="product-desc">
      <div>Category:&nbsp;&nbsp;&nbsp;<span class="meal-details">${element.meals[0].strCategory}</span></div>
      <div>Area:&nbsp;&nbsp;&nbsp;<span class="meal-details">${element.meals[0].strArea}</span></div>
      <div>Tags:&nbsp;&nbsp;&nbsp;<span class="meal-details">${element.meals[0].strTags}</span></div>
      <div>Link to Recipe:&nbsp;&nbsp;&nbsp;<a class="meal-details" target="_blank" href="${element.meals[0].strYoutube}">YouTube</a></div>
    </div>
  </div>
  <div class="comments">
    <div class="comment-title gradient-Text">
      <h2>Comments (<span id="comment-count">0</span>)</h2>
    </div>
    <div class="fetch-comments">
      
    </div>
  </div>
  <div class="add-comment">
    <div class="form-title gradient-Text">
      <h2>Add a comment</h2>
    </div>
    <form id="add-comment-form" class="add-comment-form" action="./">
    <input type="input" class="form__field" placeholder="Your Name" name="name" id="username" required/>
    <label for="name" class="form__label">Name</label>

    <div class="add-comment-form">
      <input type="input" class="form__field" placeholder="Comment" name="textBox" id="comment" required/>
      <label for="name" class="form__label">Comment</label>
    </div>
      <div id="message-div">
    </div>
      <button type="submit" class="${element.meals[0].idMeal}" id="submitBtn">Comment</button>
    </form>
    
  </div>
  </section>`;
  const appearModel = document.getElementById('comment-modal');
  const deskModal = document.getElementById('comment-modal');
  const Deskoverlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closebtn');
  const submitBtn = document.getElementById('submitBtn');
  const username = document.getElementById('username');
  const comment = document.getElementById('comment');
  const commentForm = document.getElementById('add-comment-form');
  const statusMessage = document.getElementById('message-div');

  closeBtn.addEventListener('click', () => {
    appearModel.style.display = 'none';
    deskModal.classList.remove('active');
    Deskoverlay.classList.remove('active');
  });

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postComment(submitBtn.classList[0], username.value, comment.value);
    commentForm.reset();
    statusMessage.innerHTML = 'You comment has been posted! <br>Please refresh the page to see changes';
  });
};

export default renderData;
