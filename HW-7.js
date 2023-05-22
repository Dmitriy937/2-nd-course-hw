//1 задание
/*let str = ('js');

console.log(str.toUpperCase());*/

//2 задание
/*const arrText = ['Кошка', 'Кит', 'Комар', 'Носорог'];

let title = prompt('На какую букву должно начинаться слово?');

let regexp = new RegExp(`${title}`, `i`);

arrText.forEach((el) => {
    if (regexp.test(el)) {
        console.log(el);
    }
});*/

//3 задание
/*let num = 32.58884;

//3.1
console.log(Math.floor(num));

//3.2
console.log(num.toFixed()); // - 1 способ
console.log(Math.ceil(num)); // - 2 способ

//3.3
console.log(Math.abs(num));*/

//4 задание
/*console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));*/

//5 задание
/*function getRandom(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandom(1, 10));*/

//6 задание
/*const getRandomArrNumbers = (num) => {
    const arr = [];
    let array = Math.round(num / 2);

    for (let i = 0; i < array; i++) {
        arr.push(Math.round(Math.random() * num)); 
    }
    return arr;
}

console.log(getRandomArrNumbers(17));*/

//7 задание
/*function getRandom(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandom(15, 50));*/

//8 задание
/*let date = new Date();
console.log(date);*/

//9 задание
/*let currentDate = new Date();
console.log(currentDate);

currentDate.setDate(72);
console.log(currentDate);*/

//10 задание
/*const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = 'Дата:' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' 
+ myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + ' Время: ' + myDate.toTimeString();
console.log(fullDate);*/