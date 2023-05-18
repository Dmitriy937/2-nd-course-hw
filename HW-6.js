//1 задание
/*const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}*/

//2 задание
/*const figure = [1, 5, 4, 10, 0, 3];

console.log(figure.indexOf(4));*/

//3 задание
/*const array = [1, 3, 5, 10, 20];

console.log(array.join(' '));*/

//4 задание
/*let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = 1;
	}
}

console.log(arr);*/

//5 задание
/*let arr = [1, 1, 1];

console.log([arr].concat(['2, 2, 2']));*/

//6 задание
/*let array = [9, 8, 7, 'a', 6, 5];
array.sort();
array.pop();

console.log(array);*/

//7 задание
/*let arr = [9, 8, 7, 6, 5];
let check = prompt('Введите любое число для проверки от 1 до 10');

if (check < 5 || check > 9) {
    console.log('Число не верно');
} else {
    console.log('Число введено верно');
}*/

//8 задание
/*let arr = "abcdef";
let revers = [...arr].reduce((prev, next) => next + prev);

console.log(revers);*/

//9 задание
/*let arr = [[1, 2, 3,],[4, 5, 6]];

console.log(arr.flat());*/

//10 задание - не сделано
/*let arr = [2, 3, 7, 8, 2, 4, 9];

let listSums = (array) => array.reduce((a,b) => [...a, a[a.length-1]+b], [0]).slice(2);
let listAllSums = (array) => array.reduce((a, b, index) => [...a, ...listSums(array.slice(index))], []);

console.log(listAllSums(arr));*/

//11 задание
/*const numbers = [2, 4, 5];

function doubleNumbers(numbers) {
    return numbers.map(x => x * 2);
}

console.log(doubleNumbers(numbers));*/

//12 задание
/*function nameLength(str) {
    const words = str.split(" ");
    return words.map(str => `${str} ${str.length}`);
}

console.log(nameLength("слово  слог длинное предложение буква"));*/

//13 задание
/*const myArray = [-1, 0, 5, -10, 56];
const myArr = [-25, 25, 0, -1000, -2];

function filterPositive(array) {
    let negative = [];
    for (let i = 0; i < array.length; i++) {
       if (array [i] < 0) {
        negative.push(array[i]);
       }
    }
    return negative;
  }
  
console.log(filterPositive(myArray));
console.log(filterPositive(myArr));*/

 