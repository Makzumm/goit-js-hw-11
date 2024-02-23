import{S as f,i as u}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const m={loadMoreButtonEl:document.querySelector(".load-more"),galleryWrapper:document.querySelector(".gallery"),formEl:document.querySelector("form#search-form"),inputEl:document.querySelector('input[type="text"]'),loaderEl:document.querySelector(".loader")};class h{constructor(){this._searchQuery=""}getImage(r){const o="36626377-ec15308a2cdcc9d1051736749",t=`https://pixabay.com/api/?${new URLSearchParams({key:`${o}`,q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:48})}`;return fetch(t).then(e=>{if(!e.ok)throw new Error("Failed to fetch");return e.json()}).then(e=>e).catch(e=>(console.error("Error in fetching data:",e),null))}get fetchedData(){return this._searchQuery}set fetchedData(r){this._searchQuery=r}}function g(s){return s.map(o=>`
        <div class="photo-card">
            <a class="gallery__item" href="${o.largeImageURL}">
                    <img
                    class="photo"
                    src="${o.webformatURL}"
                    loading="lazy"
                    alt="${o.tags}"
                />
            </a>
            <div class="photo-card__info">
                <p class="photo-card__info--item">
                <b>Likes ${o.likes}</b>
                </p>
                <p class="photo-card__info--item">
                <b>Views ${o.views}</b>
                </p>
                <p class="photo-card__info--item">
                <b>Comments ${o.comments}</b>
                </p>
                <p class="photo-card__info--item">
                <b>Downloads ${o.downloads}</b>
                </p>
            </div>
        </div>
    `).join("")}const{galleryWrapper:p,formEl:y,inputEl:n,loaderEl:d}=m,a=new h,L=new f(".gallery a");n.addEventListener("input",s=>{a.fetchedData=s.target.value});y.addEventListener("submit",b);function b(s){if(s.preventDefault(),a.query=s.currentTarget.elements.searchQuery.value.trim(),n.blur(),a.query===""){u.info({position:"topRight",message:"Please, type something."}),s.target.reset(),i();return}d.classList.remove("is-hidden"),a.getImage(a.fetchedData).then(r=>{if(i(),!r||!r.hits||r.hits.length===0){u.warning({position:"topRight",maxWidth:"430px",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",progressBarColor:"#B51B1B",color:"#EF4040",messageColor:"#ffffff"}),i(),d.classList.add("is-hidden");return}d.classList.add("is-hidden"),u.success({position:"topRight",message:`Hooray! We found ${r.totalHits} images.`}),p.insertAdjacentHTML("beforeend",g(r.hits)),L.refresh()}).catch(r=>{console.error("Faild to fetch:",r)})}n.addEventListener("input",()=>{n.value.trim()===""&&i()});function i(){p.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
