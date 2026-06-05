export function initTheme() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;
    const THEME_KEY = 'art_gallery_theme';

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            body.classList.toggle('dark');
            localStorage.setItem(THEME_KEY, body.classList.contains('dark') ? 'dark' : 'light');
        });
    }
}