import axios from 'axios';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const form = document.querySelector('.form');
const btn = document.querySelector('button')

form.addEventListener('submit', event => { 
    event.preventDefault();

    const getInputValue = document.querySelector('input[name="search-text"]').value;

    getRequest(getInputValue)
    .then(responce => console.log(responce.data))
    .catch(error => {
        console.error(error);
        iziToast.show({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!'
         });
    });
});

function getRequest(reqest) {
 return axios.get('https://pixabay.com/api/', {
    params: { 
        key: '49320414-34c235123b434a4e0d748057d',
        q: reqest,
        image_type: 'photo',
        orientation:  'horizontal',
        safesearch: true
    }
    });
}