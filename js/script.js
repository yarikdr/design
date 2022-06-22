window.addEventListener('DOMContentLoaded', () => {
    //header burger
    const burger = document.querySelector('.burger');
    function toggleBurger() {
        burger.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
    }
    burger.addEventListener('click', toggleBurger);

    function setBtns() {
        const btns = {
            '.works': document.querySelector('#toWorks'),
            '.process': document.querySelector('#toProcess'),
            '.services': document.querySelector('#toServices'),
            '.comments': document.querySelector('#toComments'),
        };

        for (let link in btns) {
            btns[link].addEventListener('click', () => {
                document.querySelector(link).scrollIntoView({
                    behavior: 'smooth'
                });
                toggleBurger();
            });
        }
    }

    setBtns();

    // works
    function openGrid(btn, grid) {
        document.querySelector(btn).addEventListener('click', () => {
            document.querySelector(grid).classList.toggle('view-all');
        });
    }

    openGrid('.works__btn', '.works__works');
    // openGrid('.designer__btn', '.designer__grid');


    //process 
    const video = document.querySelector('.process__video > video'),
        pause = document.querySelector('.process__pause');
    let state = false;

    const pauseFunc = () => {
        if (state) {
            video.pause();
            state = false;
            pause.classList.remove('hide');
        } else {
            video.play();
            state = true;
            pause.classList.add('hide');
        }
    };

    video.addEventListener('click', pauseFunc);
    pause.addEventListener('click', pauseFunc);

    //services 
    const services = document.querySelector('.services__inner');

    const info = [
        {title: 'ui / ux design', text: 'Be set fourth land god darkness make it wherein own'},
        {title: 'web development', text: 'A she\'d them bring void moving third she\'d kind fill'},
        {title: 'app / mobile', text: 'Dominion man second spirit he, earth they\'re creeping'},
        {title: 'game design', text: 'Morning his saying moveth it multiply appear life be'},
        {title: 'SEO / marketing', text: 'Give won\'t after land fill creeping meat you, may'},
        {title: 'photography', text: 'Creepeth one seas cattle grass give moving saw give'},
        {title: 'graphic design', text: 'Open, great whales air rule for, fourth life whales'},
        {title: 'illustrations', text: 'Whales likeness hath, man kind for them air two won\'t'},
    ];



    info.forEach(({title, text}, i) => {
        const elem = `
            <li class="service">
                <div class="service__logo">
                    <img src="./img/services/0${i+1}.png"/>
                </div>
                <h5 class="service__title label">${title}</h5>
                <div class="service__text text">${text}</div>
            </li>
        `;
        services.insertAdjacentHTML('beforeend', elem);
    });

    //comments

    const comments = new Swiper('.comments', {
        pagination: {
            el: '.comments__pagination',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        loop: true,
        slidesPerView: 1,
    });

    //brands
    const brands = document.querySelector('.brands__inner');
    for (let i = 1; i < 6; i++) {
        const elem = `
            <li>
                <img src="./img/brands/0${i}.png"/>
            </li>
        `;
        brands.insertAdjacentHTML('beforeend', elem);
    }
});