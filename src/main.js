import './js/pixabay-api';
import './js/render-functions';
import { findImg, getRequest } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector(`.form`);

form.addEventListener('submit', findImg);