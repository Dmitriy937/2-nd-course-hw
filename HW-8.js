//Задание 1
/*const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort(function(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0
});

console.log(people.sort());*/

//Задание 2
/*const arr = [3, -4, 1, 9];

function isPositive(arr) {
    return arr > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, filterFunc) {
    return arr.filter(filterFunc)
}
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people, isMale));*/ // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]*/

//Задание 3
/*let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);*/

//Задание 4
/*function delayForSecond(callback) {
    setTimeout(function(){
        console.log('Привет, Глеб!');
    }, 1000);
    // Код писать можно только внутри этой функции
  callback();
}

delayForSecond(function() {
  console.log('Привет, Глеб!');
})*/

//Задание 5
/*function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(function() {
    sayHi('Глеб')
});*/
