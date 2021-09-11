const bur = document.querySelector('.menu__spline');
const menu = document.querySelector('.menu__item');
bur.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    bur.classList.toggle('_active');
    menu.classList.toggle('_active');
})



let ssl = document.querySelectorAll('.menu__ssl[data-goto');

if (ssl.length > 0) {
    ssl.forEach(menuclick => {
        menuclick.addEventListener('click', clickMenu)


    });

    function clickMenu(e) {
        const menuclick = e.target;
        if (menuclick.dataset.goto && document.querySelectorAll(menuclick.dataset.goto)) {

            const goto = document.querySelector(menuclick.dataset.goto);
            const gotolink = goto.getBoundingClientRect().top - scrollY;

            if (bur.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                bur.classList.remove('_active');
                menu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotolink,
                behavior: 'smooth'
            });
            e.preventDefault();

        }
    }
}