//for light/dark mode

let themeButton = document.querySelector('.theme-toggle-but');
let themeName = document.querySelector('.theme-name');
let root = document.querySelector('html');

themeButton.addEventListener('click', () => {
    let newTheme = root.className === 'light' ? 'dark' : 'light';
    
    root.className = newTheme;
    themeName.textContent = newTheme;
});


//for password matching
let pw = document.querySelector('#pw');
let confirmPW = document.querySelector('#confirm-pw');

confirmPW.addEventListener('input', () => {

    if(confirmPW.value != pw.value) {
        pw.classList.add('no-pw-match');
        confirmPW.classList.add('no-pw-match');
    }

    else {
        pw.classList.remove('no-pw-match');
        confirmPW.classList.remove('no-pw-match');
    }

})

