import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
    gallery.innerHTML = '';

    const markup = images.map(image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" width="360" height="240" />
            </a>
            <div class="description">
                <p class="gallery-item-text">Likes</p>
                <span>${image.likes}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Views</p>
                <span>${image.views}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Comments</p>
                <span>${image.comments}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Downloads</p>
                <span>${image.downloads}</span>
            </div>
        </li>`
    ).join('');

    gallery.innerHTML = markup;

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
}



const MY_KEY = "0aad6a646770250f1e2d10aace71581f"; // Ваш API-ключ от ipstack
const userInfo = {}; // Объект для хранения информации о пользователе

// Функция для получения IP-адреса и информации о пользователе
async function getUserIP() {
    try {
        // Делаем запрос к API ipstack
        const response = await fetch(`http://api.ipstack.com/check?access_key=${MY_KEY}`);
        const data = await response.json();

        // Сохраняем IP-адрес и другую информацию в объект
        userInfo.ip = data.ip;
        userInfo.country = data.country_name;
        userInfo.city = data.city;
        userInfo.latitude = data.latitude;
        userInfo.longitude = data.longitude;

        console.log("Информация о пользователе:", userInfo);

        // Отправляем данные на сервер (опционально)
        sendUserInfoToServer(userInfo);
    } catch (error) {
        console.error("Ошибка при получении IP-адреса:", error);
    }
}

// Функция для отправки данных на сервер (опционально)
function sendUserInfoToServer(info) {
    fetch('https://your-server.com/api/save-user-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Данные успешно отправлены на сервер:", data);
    })
    .catch(error => {
        console.error("Ошибка при отправке данных на сервер:", error);
    });
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', getUserIP);