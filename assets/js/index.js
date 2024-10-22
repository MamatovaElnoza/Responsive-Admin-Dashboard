const themeToggler = document.querySelector('.theme-toggler');



//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
})