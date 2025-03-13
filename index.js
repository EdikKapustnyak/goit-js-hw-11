import{S as u,i as n,a as d}from"./assets/vendor-D5mnuR-h.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery");function p(a){l.innerHTML="";const s=a.map(r=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" width="360" height="240" />
            </a>
            <div class="description">
                <p class="gallery-item-text">Likes</p>
                <span>${r.likes}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Views</p>
                <span>${r.views}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Comments</p>
                <span>${r.comments}</span>
            </div>
            <div class="description">
                <p class="gallery-item-text">Downloads</p>
                <span>${r.downloads}</span>
            </div>
        </li>`).join("");l.innerHTML=s,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const m=document.querySelector(".form");m.addEventListener("submit",c);function c(a){a.preventDefault();const s=document.querySelector('input[name="search-text"]').value.trim();if(s===""){n.show({title:"Error",message:"Please enter a search query!"});return}f(s).then(o=>{o.data.hits.length===0?n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(console.log(o.data),p(o.data.hits))}).catch(o=>{console.error(o),n.show({title:"Error",message:"Sorry, there was an error processing your request. Please try again!"})})}function f(a){return d.get("https://pixabay.com/api/",{params:{key:"49320414-34c235123b434a4e0d748057d",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const y=document.querySelector(".form");y.addEventListener("submit",c);
//# sourceMappingURL=index.js.map
