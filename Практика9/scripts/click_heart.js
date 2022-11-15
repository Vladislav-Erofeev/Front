let heart = document.getElementById('heart');

heart.onclick = function () {
    if(heart.classList.contains('white_heart')) {
        heart.classList.add('red_heart');
        heart.classList.remove('white_heart');
        heart.addEventListener('mousemove', drawHearts);
    } else {
        heart.classList.add('white_heart');
        heart.classList.remove('red_heart');
        heart.removeEventListener('mousemove', drawHearts);
    }
}