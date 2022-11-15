function drawHearts(event) {
    console.log("start");
    var heart = document.createElement('i');
    heart.className = 'heart red_heart';
    heart.style.position = "absolute";
    heart.style.top = (event.pageY - 10) + "px";
    heart.style.left = (event.pageX + 10) + "px";
    heart.style.backgroundImage = 'src("pictures/heart.png")';
    document.body.append(heart);
    setTimeout(function () {
        document.body.removeChild(heart);
    }, 1000);
}