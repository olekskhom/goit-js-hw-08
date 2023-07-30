import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryCardMurkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
    })
    .join('');
}


const cardsMarcup = createGalleryCardMurkup(galleryItems);
galleryEl.innerHTML = cardsMarcup;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});