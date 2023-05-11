let month = Number(prompt('Введите номер месяца от 1 до 12'));
let season = ['Зима', 'Весна', 'Лето', 'Осень'];

function monthOfYear() {
    if (month <= 12 || month <= 1) {
        return 'Время года: ' + season[Math.floor(month/3)];
    } else if (Number.isNaN(month)) {
        return 'Вы ввели неверное значение';
    } else {
        return 'В году всего 12 месяцев, повтори попытку))';
    }
}

alert(monthOfYear());