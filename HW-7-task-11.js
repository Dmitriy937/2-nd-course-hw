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

//task 7.11
function shuffle() {
    const fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let answer = prompt('Чему равнялся первый элемент массива?');
    let answer2 = prompt('Чему равнялся последний элемент массива?');
    if (answer.toLowerCase() == fruit[0].toLowerCase() && answer2.toLowerCase() == fruit[6].toLowerCase()) {
        alert('Поздравляем Вы угадали оба элемента');
    } else if(answer.toLowerCase() == fruit[0].toLowerCase || answer2.toLowerCase() == fruit[6].toLowerCase()) {
        alert('Вы почти угадали, Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно');
    }
}



