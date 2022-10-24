"use strict";

//												Задача 2 (Сумма двух чисел)
// const numberOne = +prompt('Введите первое число:', '');
// const numberTwo = +prompt('Введите второе число:', '');
// const sum = numberOne + numberTwo;

// alert(sum);
// alert(typeof sum);


//												Задача 3 (Первый символ маленький)
// const userName = prompt('Введите ваше имя:', 'Dima');
// alert(userName[0].toLowerCase());


//												Задача 4 (Проверка на спам)
// const string = prompt('Введите строку:', '');
// alert(string.includes('free'));


//												Задача 5
const string = prompt('Введите строку более 10 символов, учитвывая пробелы', 'Hellow world!');
console.log(string.slice(0, 5));
console.log(string.slice(-5));