import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const MY_KEY = '49320414-34c235123b434a4e0d748057d';

export function getRequest(request) {
    return axios.get(API_URL, {
        params: { 
            key: MY_KEY,
            q: request,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    });
}