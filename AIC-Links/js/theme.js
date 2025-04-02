const themeToggle = document.getElementById('theme-toggle');
const darkStylesheet = document.getElementById('dark-mode-stylesheet');
const lightStylesheet = document.getElementById('light-mode-stylesheet');
const themeIcon = document.getElementById('theme-icon');

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    darkStylesheet.disabled = false;
    lightStylesheet.disabled = true;
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
} else {
    darkStylesheet.disabled = true;
    lightStylesheet.disabled = false;
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (darkStylesheet.disabled) {
        darkStylesheet.disabled = false;
        lightStylesheet.disabled = true;
        document.body.classList.replace('light-mode', 'dark-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        darkStylesheet.disabled = true;
        lightStylesheet.disabled = false;
        document.body.classList.replace('dark-mode', 'light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});