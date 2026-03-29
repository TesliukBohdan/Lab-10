import { fetchImages } from './modules/api.js';
import { renderGallery, shuffleArray } from './modules/gallery.js';
import { initTheme, toggleTheme } from './modules/theme.js';

let page = 1;
let photos = [];

// Ініціалізація
initTheme();

const themeBtn = document.getElementById("themeToggle");
const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clearGallery");
const removeLastBtn = document.getElementById("removeLast");
const reverseBtn = document.getElementById("reverseGallery");
const shuffleBtn = document.getElementById("shuffleGallery");

async function handleLoadImages() {
    const newPhotos = await fetchImages(page);
    photos = [...photos, ...newPhotos]; 
    renderGallery(photos);
    page++;
}

// Події
themeBtn.addEventListener("click", toggleTheme);
loadMoreBtn.addEventListener("click", handleLoadImages);

clearBtn.addEventListener("click", () => {
    photos = [];
    renderGallery(photos);
});

removeLastBtn.addEventListener("click", () => {
    photos.pop();
    renderGallery(photos);
});

reverseBtn.addEventListener("click", () => {
    photos.reverse();
    renderGallery(photos);
});

shuffleBtn.addEventListener("click", () => {
    photos = shuffleArray(photos);
    renderGallery(photos);
});

// Перше завантаження
handleLoadImages();