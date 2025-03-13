
const gallery = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createCards(images));

function createCards(cards) {
  return cards
    .map(card => {
      return `<li class="gallery-item js-product-item">
        <a class="gallery-link" href="${card.original}">
          <img
            class="gallery-image"
            src="${card.preview}"
            alt="${card.description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});