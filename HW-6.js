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
let check = arr.includes(5);

console.log(check);*/

//8 задание
/*let arr = "abcdef";
let revers = [...arr].reduce((prev, next) => next + prev);

console.log(revers);*/

//9 задание
/*let arr = [[1, 2, 3,],[4, 5, 6]];

console.log(arr.flat());*/

//10 задание - 1 решение
/*let maxTicketNumber = 10;
let minTicketNumber = 1;
let ticketNumbers = Array(maxTicketNumber).fill(0);

ticketNumbers = ticketNumbers.map(_ => {
  const seed = [Math.random() * minTicketNumber, Math.random() * maxTicketNumber];
  const randomValue = seed[Math.floor(Math.random() * seed.length)];
  return Math.round(randomValue)
});

function summArrayElements(ticketNumbers){
    let x = 0;
    return ticketNumbers.map(i => x += i, x).reverse()[0]
  }

 console.log(summArrayElements(ticketNumbers));*/

//10 задание - 2 решение
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

function getNegativeNumbers(array) {
    return array.filter(function(value) {
      return value < 0;
    });
 }
  console.log(getNegativeNumbers(myArray));
  console.log(getNegativeNumbers(myArr));*/