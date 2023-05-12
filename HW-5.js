//1 задание
/*let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let result = min(a, b);
alert(result);/*

//2 задание
/*let a = prompt('Введите число');

function evenОrОdd(a) {
    if (a % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

alert(evenОrОdd(a));*/

//3 задание
/*let a = Number(prompt('Введите любое число'));

function square(a) {
    a = a ** 2;
    return a;
}
console.log(square(a));*/

//4 задание
/*let a = Number(prompt('Сколько Вам лет?'));

function year(a) {
    if (a < 0) {
        return 'Вы ввели неправильное значение';
    } else if (a == 0 || a < 12) {
        return 'Привет, друг!';
    } else if (a >= 13) {
        return 'Добро пожаловать!';
    }
}

alert(year(a));*/

//5 задание
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

function correctNumbers(a, b) {
    if (Number.isNaN(a)) {
        return 'Одно или оба значения не являются числом';
    } else if (Number.isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return (a * b);
    }
}

alert(correctNumbers(a, b));

//6 задание
/*let n = Number(prompt('Введите первое число'));

function degreeInCube(n) {
    if (Number(n)) {
        return(n ** 3);
    } else if (Number.isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
}

alert(degreeInCube(n));*/

//7 задание
/*function getRectangleArea() {
    return this.pi * this.radius ** 2;
}

function getRectanglePerimeter() {
    return 2 * this.pi * this.radius;
}

const circle1 = {
    pi: 3.14,
    radius: 12,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

function getRectangleArea() {
    return this.pi * this.radius ** 2;
}

function getRectanglePerimeter() {
    return 2 * this.pi * this.radius;
}

const circle2 = {
    pi: 3.14,
    radius: 10,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());*/

//8 задание
//HW-5-task-8.js
