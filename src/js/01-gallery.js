// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(1);

const getGalleryEl = document.querySelector(".gallery");

const makeMarkup = galleryItems.reduce(function (html, {original, preview, description} ) {

	return html += `<a class="gallery__item" 
    href= ${original}>
  <img class="gallery__image" 
  src= ${preview} 
  alt= ${description} />
</a>`;
}, '');

getGalleryEl.insertAdjacentHTML('afterbegin', makeMarkup);


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.7,
  });




  console.log(1);