"use strict";

// 								Задание 9
// Вариант 1
// function pow(x, n) {
// 	x = x**n;
// 	return x
// }
// const sum = pow(3, 4);
// console.log(sum);


// Вариант 2
// function degreeNumber(x, n) {
// 	let degree = Math.pow(3, 4);
// 	return degree
// }
// const result = degreeNumber();
// console.log(result);


// Вариант 3 => стрелочная функция
// let degreeNumber = (x, n) => Math.pow(x,n);
// console.log(degreeNumber(3, 4));


// 								Задание 10
//Вариант 1
// let minNumber = (a, b) => Math.min(22, -22);
// console.log(minNumber());

// Вариант 2
function minNumber(a, b) {
	let result;
	if(a <= b ) {
		result = a;
	} else {
		result = b;
	}
	return result
}
console.log(minNumber(32, -32));
