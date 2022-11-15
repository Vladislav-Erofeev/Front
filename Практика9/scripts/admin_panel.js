let btn = document.getElementById('enter');
btn.onclick = function () {
    val = prompt("Введите логин: ");
    if (val == null || val == "") {
        alert("Отменено");
    } else if(val == "Админ") {
        let password = prompt("Введите пароль: ");
        if (password == null || password == "") {
            alert("Отменено");
        } else if (password == "Я главный") {
            alert("Здравствуйте!");
        } else {
            alert("Неверный пароль");
        }
    } else {
        alert("Неизвестный логин");
    }
}

let btn1 = document.getElementById('enter_footer');
btn1.addEventListener('click', () => {
    let val = prompt("Желаете войти на сайт?");
    if (val == "Да")
        alert("Круто!");
    else
        alert("Попробуйте ещё раз");
})
