//header burger
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
});

// works
document.querySelector('.works__btn').addEventListener('click', () => {
    document.querySelector('.works__works').classList.toggle('view-all');
});

//process 
const video = document.querySelector('.process__video > video'),
      pause = document.querySelector('.process__pause');

let state = false;

video.addEventListener('click', () => {
    if (state) {
        video.pause();
        state = false;
        pause.classList.remove('hide');
    } else {
        video.play();
        state = true;
        pause.classList.add('hide');
    }
});