const mobmenu = () => {
    const btn = document.querySelector('.header__top_burger');
    const menu = document.querySelector('.menu');

    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
            btn.classList.toggle('active');
        })
    }
}

export default mobmenu;