// Add imports above this line
import { galleryItems } from './gallery-items';
import galleryTpl from '../templates/gallery.hbs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const getGalleryEl = document.querySelector(".gallery");

const makeMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
   return galleryTpl(galleryItems);
}

getGalleryEl.insertAdjacentHTML('afterbegin', makeMarkup);


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.7,
  });

