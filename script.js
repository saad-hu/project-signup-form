let themeButton = document.querySelector('.theme-toggle-but');
let themeName = document.querySelector('.theme-name');
let root = document.querySelector('html');

themeButton.addEventListener('click', () => {
    let newTheme = root.className === 'light' ? 'dark' : 'light';
    
    root.className = newTheme;
    themeName.textContent = newTheme;
})