// Add imports above this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const refs = {
  body: document.querySelector("body"),
  gallery: document.querySelector(".gallery"),
};

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img 
                class="gallery__image" 
                src="${preview}"
                alt="${description}" />
          </a>
        </li>`;
    })
    .join("");
}

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "top",
});
