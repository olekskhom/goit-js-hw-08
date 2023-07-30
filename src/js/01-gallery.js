// Імпорт бібліотеки SimpleLightbox:
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

// Отримання посиланя на DOM-елемент:
const galleryEl = document.querySelector('.gallery');


// Створення HTML-розмітки для галереї:
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

// Відображення галереї на сторінці:
const cardsMarcup = createGalleryCardMurkup(galleryItems);
galleryEl.innerHTML = cardsMarcup;


// Ініціалізація SimpleLightbox:
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});