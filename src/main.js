import { refs } from './js/vars.js';
import FetchImage from './js/pixaby-api.js';
import createMarkUp from './js/render-functions.js';
import upButton from './js/up-button.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const { loadMoreButtonEl, galleryWrapper, formEl, inputEl } = refs;
const fetchImg = new FetchImage()
const gallerySimpleLightbox = new SimpleLightbox('.gallery a');

inputEl.addEventListener('input', (e) => {
    fetchImg.fetchedData = e.target.value;
})

formEl.addEventListener('submit', onformEl)

function onformEl(e) {
    e.preventDefault();

    fetchImg.query = e.currentTarget.elements.searchQuery.value.trim();

    inputEl.blur()

    if (fetchImg.query === '') {
        iziToast.info({
            message: 'Please, type something.'
        });
        e.target.reset();
        clearHTML();
        return
    }

    fetchImg.getImage(fetchImg.fetchedData)
        .then(data => {
            clearHTML()
            if (!data || !data.hits || data.hits.length === 0) {
                iziToast.info({
                    message: 'There are no images matching your search query. Please try again.'
                });
                loadMoreButtonEl.classList.add('is-hidden');
                clearHTML();
                return;
            }

            iziToast.success({
                message: `Hooray! We found ${data.totalHits} images.`,
            });

            galleryWrapper.insertAdjacentHTML('beforeend', createMarkUp(data.hits));
            gallerySimpleLightbox.refresh();
        })
        .catch(error => {
            console.error('Faild to fetch:', error)
        })

}

function clearHTML() {
    galleryWrapper.innerHTML = '';
}

upButton();