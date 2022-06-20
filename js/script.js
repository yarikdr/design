//header burger
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
});

// works
document.querySelector('.works__btn').addEventListener('click', () => {
    document.querySelector('.works__works').classList.toggle('view-all');
});