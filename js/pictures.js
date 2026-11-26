import { openBigPicture } from './big-picture.js';

const picturesBox = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);

    const img = thumbnail.querySelector('.picture__img');

    img.src = photo.url;
    img.alt = photo.description;

    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

    thumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(photo);
    });

    fragment.append(thumbnail);
  });

  picturesBox.append(fragment);
};

export { renderThumbnails };
