import{i as s,a as c}from"./assets/vendor-DB1IOvfG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".form");document.querySelector("button");l.addEventListener("submit",o=>{o.preventDefault();const r=document.querySelector('input[name="search-text"]').value;u(r).then(i=>console.log(i.data)).catch(i=>{console.error(i),s.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})});function u(o){return c.get("https://pixabay.com/api/",{params:{key:"49320414-34c235123b434a4e0d748057d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}document.querySelector(".gallery");container.insertAdjacentHTML("beforeend",m(images));function m(o){return o.map(r=>`<li class="gallery-item js-product-item">
        <a class="gallery-link" href="${r.original}">
          <img
            class="gallery-image"
            src="${r.preview}"
            alt="${r.description}"
          />
        </a>
      </li>`).join("")}new SimpleLightbox(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=index.js.map
