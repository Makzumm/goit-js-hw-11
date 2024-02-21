import{S as f,i as c}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m={loadMoreButtonEl:document.querySelector(".load-more"),galleryWrapper:document.querySelector(".gallery"),formEl:document.querySelector("form#search-form"),inputEl:document.querySelector('input[type="text"]')};class p{constructor(){this.page=1,this._searchQuery=""}getImage(r){const s="36626377-ec15308a2cdcc9d1051736749",t=`https://pixabay.com/api/?${new URLSearchParams({key:`${s}`,q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(e=>{if(!e.ok)throw new Error("Failed to fetch");return e.json()}).then(e=>e).catch(e=>(console.error("Error in fetching data:",e),null))}get fetchedData(){return this._searchQuery}set fetchedData(r){this._searchQuery=r}}function h(o){return o.map(s=>`
        <div class="photo-card">
            <a class="gallery__item" href="${s.largeImageURL}">
                    <img
                    class="photo"
                    src="${s.webformatURL}"
                    loading="lazy"
                    alt="${s.tags}"
                />
            </a>
            <div class="info">
                <p class="info-item">
                <b>Likes: ${s.likes}</b>
                </p>
                <p class="info-item">
                <b>Views: ${s.views}</b>
                </p>
                <p class="info-item">
                <b>Comments : ${s.comments}</b>
                </p>
                <p class="info-item">
                <b>Downloads : ${s.downloads}</b>
                </p>
            </div>
        </div>
    `).join("")}function g(){let o=document.querySelector(".button-up");window.onscroll=()=>{window.scrollY>400?o.classList.remove("button-up-hidden"):window.scrollY<400&&o.classList.add("button-up-hidden")},o.addEventListener("click",()=>{window.scrollTo(0,0)})}const{loadMoreButtonEl:y,galleryWrapper:u,formEl:b,inputEl:d}=m,n=new p,L=new f(".gallery a");d.addEventListener("input",o=>{n.fetchedData=o.target.value});b.addEventListener("submit",w);function w(o){if(o.preventDefault(),n.query=o.currentTarget.elements.searchQuery.value.trim(),d.blur(),n.query===""){c.info({message:"Please, type something."}),o.target.reset(),l();return}n.getImage(n.fetchedData).then(r=>{if(l(),!r||!r.hits||r.hits.length===0){c.info({message:"There are no images matching your search query. Please try again."}),y.classList.add("is-hidden"),l();return}c.success({message:`Hooray! We found ${r.totalHits} images.`}),u.insertAdjacentHTML("beforeend",h(r.hits)),L.refresh()}).catch(r=>{console.error("Faild to fetch:",r)})}function l(){u.innerHTML=""}g();
//# sourceMappingURL=commonHelpers.js.map
