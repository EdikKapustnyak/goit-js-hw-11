import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderGallery } from './render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader')
// form.addEventListener('submit', findImg);

export function findImg(event) { 
    event.preventDefault();
    
    const getInputValue = document.querySelector('input[name="search-text"]').value.trim();

    if (getInputValue === '') { 
        iziToast.show({
            title: 'Error',
            message: 'Please enter a search query!'
        });
        return;
    }
    loader.classList.remove('visually-hidden');
    getRequest(getInputValue)
        .then(response => {
            if (response.data.hits.length === 0) { 
                iziToast.show({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
            } else {
                console.log(response.data);
                renderGallery(response.data.hits);
            }
        })
        .catch(error => {
            console.error(error);
            iziToast.show({
                title: 'Error',
                message: 'Sorry, there was an error processing your request. Please try again!'
            });
        })
        .finally(() => loader.classList.add('visually-hidden'));
}

export function getRequest(request) {
    return axios.get('https://pixabay.com/api/', {
        params: { 
            key: '49320414-34c235123b434a4e0d748057d',
            q: request,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    });
}