let heart = document.getElementById('heart');

heart.onclick = function () {
    if(heart.classList.contains('white_heart')) {
        heart.classList.add('red_heart');
        heart.classList.remove('white_heart');
        document.addEventListener('mousemove', drawHearts);
    } else {
        heart.classList.add('white_heart');
        heart.classList.remove('red_heart');
        document.removeEventListener('mousemove', drawHearts);
    }
}