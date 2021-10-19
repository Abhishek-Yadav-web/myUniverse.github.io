const acc = document.getElementById('Account');
const nav = document.querySelector('.nav');
const midBx = document.querySelector('.midBx');
const heart = document.querySelector('.hearBx');



acc.addEventListener('click', () => {
    nav.classList.toggle('active');
});


heart.addEventListener('click', () => {
    document.querySelector('.pLeft').classList.toggle('active')

    document.querySelector('.hOutline').classList.toggle('active');

    document.querySelector('.pHeart').classList.toggle('active');
});