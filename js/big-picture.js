
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');

const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentImg = document.createElement('img');
  commentImg.classList.add('social__picture');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentImg.width = 35;
  commentImg.height = 35;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  commentElement.append(commentImg, commentText);

  return commentElement;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;

  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;

  socialCaption.textContent = photo.description;

  socialComments.innerHTML = '';

  const commentsFragment = document.createDocumentFragment();

  photo.comments.forEach((comment) => {
    commentsFragment.append(createComment(comment));
  });

  socialComments.append(commentsFragment);

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', closeBigPicture);

export { openBigPicture };
