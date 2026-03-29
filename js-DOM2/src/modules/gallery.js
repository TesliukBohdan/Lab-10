const galleryContainer = document.getElementById("gallery");

export function renderGallery(photos) {
    galleryContainer.innerHTML = "";
    photos.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        galleryContainer.appendChild(img);
    });
}

export function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}