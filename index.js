import{S as u,i as c,a as p}from"./assets/vendor-D5mnuR-h.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const l=document.querySelector(".gallery");function f(r){l.innerHTML="";const e=r.map(s=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
                <img src="${s.webformatURL}" alt="${s.tags}" width="360" height="240" />
            </a>
            <div class="description">
                <p class="gallery-item-text">Likes</p>
                <span>${s.likes}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Views</p>
                <span>${s.views}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Comments</p>
                <span>${s.comments}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Downloads</p>
                <span>${s.downloads}</span>
            </div>
        </li>`).join("");l.innerHTML=e,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const m="0aad6a646770250f1e2d10aace71581f",a={};async function y(){try{const e=await(await fetch(`http://api.ipstack.com/check?access_key=${m}`)).json();a.ip=e.ip,a.country=e.country_name,a.city=e.city,a.latitude=e.latitude,a.longitude=e.longitude,console.log("Информация о пользователе:",a),h(a)}catch(r){console.error("Ошибка при получении IP-адреса:",r)}}function h(r){fetch("https://your-server.com/api/save-user-info",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(e=>{console.log("Данные успешно отправлены на сервер:",e)}).catch(e=>{console.error("Ошибка при отправке данных на сервер:",e)})}window.addEventListener("load",y);const g=document.querySelector(".form");g.addEventListener("submit",d);function d(r){r.preventDefault();const e=document.querySelector('input[name="search-text"]').value.trim();if(e===""){c.show({title:"Error",message:"Please enter a search query!"});return}v(e).then(n=>{n.data.hits.length===0?c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(console.log(n.data),f(n.data.hits))}).catch(n=>{console.error(n),c.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})})}function v(r){return p.get("https://pixabay.com/api/",{params:{key:"49320414-34c235123b434a4e0d748057d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const w=document.querySelector(".form");w.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
