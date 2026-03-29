export function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme + '-theme';
}

export function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.className = 'light-theme';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.className = 'dark-theme';
        localStorage.setItem('theme', 'dark');
    }
}