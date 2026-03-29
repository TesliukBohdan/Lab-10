export async function fetchImages(page, limit = 4) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
        if (!response.ok) throw new Error("Помилка мережі");
        const data = await response.json();
        // Повертаємо масив посилань на фото
        return data.map(item => item.download_url);
    } catch (error) {
        console.error("Помилка завантаження:", error);
        return [];
    }
}