'use strict';

// 				Задача 14
// const userObj = {};
// userObj.name = 'Jonh';
// userObj.surname = 'Smith';
// userObj.name = 'Pete';
// delete userObj.name;

// console.log(userObj);



// 				Задача 15
// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// }

// let sum = 0;
// for (let key in salaries) {
// 	sum += (salaries[key]);
// }

// console.log(sum);



//					Задача 16
// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu",
// };

// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'number') {
// 			obj[key] *= 2;
// 		}
// 	}
// 	return obj
// };

// console.log(multiplyNumeric(menu));



//					Задача 17
 
let arr = [
	{ name: "User1", age: 25},
	{ name: "User2", age: 30},
	{ name: "User3", age: 28},
];

function sortByAge(users) {
	users.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);