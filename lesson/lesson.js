'use strict';

// let a = '142qwe';
// console.log(Boolean(a));


// const a = 5;
// const b = '3';
// console.log(a + b); // Если один из операндов string, и между ними +, то второе значение прeбразуется к string
// console.log(a + +b);


//Number: < > <= >= преобразуют операнды к числу и результат boolean
// console.log(2 < '3'); // Второй операнд преобразовался к числу, чтобы сравнить
// console.log('2' < '3'); // Оба операнда преобразовался к числу, чтобы сравнить


//Унарный + конвертирует в number
// console.log(+'3' + 3);


//Строгое и не строгое сравнение
// == Проверяет значение, а === проверяет и значение и тип
// console.log(true == true);
// console.log(true == 1);
// console.log(true == false);
// console.log(true == 'qwerty');
// console.log(true == ' ');
// console.log(false == '0');
// console.log(false == '');
// console.log(false == []);
// console.log(3 == '3');
// console.log(true == '1');
// // Лучше использовать строгое сравнение, чтобы избежать неявное преобразования типов
// console.log('wiudh' === 'wiudh');
// console.log(1 === '1');
// console.log(false === false);
// console.log(false === true);
// console.log(false === true);


// Операторы. унарный, бинарный, операнд
// Операнд(аргумент), то к чему исп. оператор. 3 + 1 - Операнды 3 и 1
// унарный ОПЕРАТОР, - применяется к одному операнду
// let a = 1;
// a = -a; // С помощью унарного оператора сделали аргумент отрицательным
// console.log(a); 

// let a = '123';
// let b = '2';
// console.log(a + b); // = Конкатенация строк
// console.log(+a + +b); // Если операнд не число, то унарный + преобразует операнд в число

// let q = true;
// console.log(-q);// Унарный минус преобразует булеан в число, и делает его отрицательным
// console.log(+q);
// console.log(q);

// let r = -23;
// console.log(-r); // Минус на минус дает +, поэтому отриц. число, унарный минус преобр. в полож.
// бинарный оператор это обычный оператор, который вычитает или складывает, а так же * и /.


// num++;//инкременет //Постфиксная форма (Возвращает старое значение, до +-)
// num--;//декремент

// ++num; // Префиксная форма, Сперва складывает/уменьшает, затем выводит это новое значение
// --num;


// Логические операторы
//									||(або)
// const isUser = true
// const searchable = true;
// const group = 'group1';

// console.log(!isUser || group || !true); // Если хотя бы одна мерем. истина, то выведет это значение


// console.log(true || true); истина
// console.log(false || true); истина
// console.log(true || false); истина
// console.log(false || false); ложь

//									&&(И)

// const isUser = true
// const searchable = 0;
// const group = 'group1';

// console.log(isUser && group && searchable); //Вычисляет операнды справа налево
// все операнды превращает в булеан, и если все ложь то возвращает исходное значение этого операнда
// Если все операнды действительны, то возвращает последний
// ВОЗВРАЩАЕТ ПЕРВОЕ ЛОЖНОЕ ЗНАЧЕНИЕ ИЛИ ЕСЛИ НИЧЕГО НЕ НАЙДЕНО ТО ПОСЛЕДНЕЕ
// console.log(true && true); Истина
// console.log(false && true); ложь
// console.log(true && false); ложь
// console.log(false && false); ложь

//									!(Не), !!

// const a = 'group1';
// console.log(!a); // ! Конвертирует в булеан, и выводит противоположный результат. Было тру стало фолс
// console.log(!!a); // !! Конвертирует в булеан, но не меняет значение на противоположное. Было истина и останется истиной

// ТЕАРНАРНЫЙ ОПЕРАТОР ?

// let result2;
// let age = 20;

// const result = age >= 18 ? console.log(1) : console.log(2);

// if (age >= 18 ) {
// 	result2 = 1;
// } else {
// 	result2 = 2;
// }
// console.log(result2);

// 								УРОК 4(ФУНКЦИИ)
// let name = 10;

// function showName() {
// 	let name = 'User';
// 	console.log(name);
// }

// function sum(a, b) {
// 	return a + b;
// }

// const resultOfSum = sum(1, 3);
// console.log(resultOfSum);

// showName();


// Одна функция - одно действие
// Как наименовать функции - в документе
// Не все функции что-то возвращают



// Функция Declaration 
// if (true) {
// function user1(name) {
// 	console.log(name)
// }
// }
// user1();

// //  функция Expression
// const user2 = function(args) {}
// user2();


// const age = 17;
// let welcome;

// if (age < 18) {
// 	welcome = function() {
// 		console.log("hello");
// 		}
// 	}else {
// 		welcome = function() {
// 		console.log("hi There!")
// 	}
// }

// 	welcome();

// 				СТРЕЛОЧНАЯ ФУНКЦИЯ
// Тоже в 15 году появилось

// const sum1 = (a, b) => {
// 	console.log(arguments);
// };

// const sum2 = (a) => a * a



// function showArg(name, age, city) {
// 	console.log(arguments);
// }
// showArg("User", 20, "Dnipro")

// Аргумент - массив который возвращает те аргументы, которые мы укзали при вызове функции

// const sum2 = function(a, b) {
// 	return a + b ;
// }
// sum2(2,3);

//						Урок пять, массив

// методы для добавления элементов в массив
// push() - Добавляет элемент в конец.
//unshift() - добавляет в начало, смещая все элементы на 1 индекс, что хуже чем пуш

//pop() - Удаляет последний элемент
// shift() - удаляет первый элемент

// const arrayOfUser2 = ["user1","user2","user3","user4","user5"];

// const newArray = arrayOfUser2.slice(0, 4);
// arrayOfUser2.push("user6");
// console.log(newArray);
// console.log(arrayOfUser2);

//splice(Удаляет от(start), сколько элементов удалить, Вставляем элемент"hello", Вставляем второй элемент"JS" и т.д)
// const arrayOfUser2 = ["user1","user2","user3","user4","user5"];

// arrayOfUser2.splice(2, 2, "hello", );
// // arrayOfUser2.push("user6");
// // console.log(newArray);
// console.log(arrayOfUser2);


// const users = ["user1",0,"user3","user4","user5"];
// user2.forEach(function(user){
// 	console.log(user);
// })

// user2.forEach((user) => console.log(user));


// includes - возвращает true или false
// const isUser = users.includes(false); // true false
// Includes - сторогое сравнение. если написать false, он будет искать только false, игнорируя:
// ===
// 0
// ""
// null
// undefined

// ПОИСК В МАССИВЕ
// find - возвращает или найденный элемент или undefined.
// findIndex - Тоже самое, только возвращает index.

// const adminUser = {
// 	name: "User"
// }

// const users = ["user1","user2","user3","user4","user5", adminUser];

// let result = users.find(function(item){
// return item.name === "User"
// })

// console.log(result); 

// const users = ["user1","user2","user30","user40","user50"];

// const result = users.filter(function(item, index, array) {
// 	return item.length > 5
// })

// const result2 = users.filter(item => item.length > 5)

// console.log(result); 


// const myArr = [1, 2, 3, 4, 5];
// myArr.shift();
// console.log(myArr);


// function delay(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms))
//  }
// delay(3000).then(() => alert('выполнилось через 3 секунды'));


// Практика
// let promise = new Promise( function(resolve, reject) {
// 	setTimeout(() => resolve(1), 1000);
// }).then(function(result){
// 	alert(result);
// 	return result * 2
// }).then(function(result){
// 	alert(result);
// 	return result * 2
// }).then(function(result){
// 	alert(result);
// 	return result
// }) // Это работает потому что Promise.then тоже возвращает промис

// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(() => resolve(1), 1000)
// }).then(function(result){
// 	console.log(result);

// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => resolve(result * 2), 1000);
// 	});

// }).then(function(result){
// 	console.log(result)

// 	return new Promise ((resolve, reject) => {
// 		setTimeout(() => resolve(result * 2), 1000);
// 	});

// }).then(function(result){
// 	console.log(result);
// });


// loadScript("/article/promise-chaining/one.js")
// .then(function(script){
// 	return loadScript("/article/promise-chaining/two.js");
// })
// .then(function(script){
// 	return loadScript("/article/promise-chaining/three.js")
// })
// .then(function(script){
// 	one();
// 	two();
// 	three();
// })

// fetch('/article/promise-chaining/user.json')
// .then (function(response){
// 	return response.text();
// })
// .then(function(text) {
// 	alert(text)
// })

// fetch('/article/promise-chaining/user.json')
// .then(response => response.json())
// .then(user => alert(user.name));


// fetch('/article/promise-chaining/user.json')
// .then(response => response.json())
// .then(user => fetch(`https://api.github.com/users/${user.name}`))
// .then(response => response.json())
// .then(githubUser => {
// 	let img = document.createElement('img');
// 	img.src = githubUser.avatar_url;
// 	img.className = "promise-avatar-example";
// 	document.body.append(img);

// 	setTimeout(() => img.remove(), 3000); // (*)
//  });


// УРОК 10
// ИМПЕРАТИВНЫЙ КОД
// function onlyAdd(array) {
// 	const result = []

// 	for (const element of array) {
// 		if(element % 2 !== 0) {
// 			result.push(element)
// 		}
// 	}

// 	return result
// }

// ДЕКЛАРАТИВНЫЙ КОД
// function onlyOdd(array){
// 	return array.filter(el => el % 2 !== 0)
// }

// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(() => resolve("done!"), 1000);
//  });
 
//  // resolve запустит первую функцию, переданную в .then
//  promise.then(
// 	result => alert(result), // выведет "done!" через одну секунду
// 	error => alert(error) // не будет запущена
//  );


// ЦЕПОЧКА ПРОМИСОВ
// new Promise(function(resolve, reject) {
// 	setTimeout(() => resolve(1), 1000);
// }).then(function(result){
// 	alert(result)
// 	retutn(result * 2)
// }).then(function(result){
// 	alert(result);
// 	return(result * 2)
// }) И Т.Д




// fetch
// let promise = fetch(url);





// let promise = Promise.all(iterable);

// Promise.all([
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => resolve(1), 1000)
// 	}),
// 	2,
// 	3
// ]).then(alert);





// Promise.allSettled
// let promise = Promise.allSettled(iterable);

// Методу render нужны результаты всех fetch

// const user = {
// 	name: 'Pasha',
// 	family: 2,

// 	sayHi(){
// 		console.log(`Hellow ${this.family}`)
// 	}
// }
// console.log(user.sayHi())



// THIS - Поточный объект, с которым мы работаем
// function sayHi(){
// 	console.log(this);
// }

// sayHi(); 

// function sayHi1() {
// 	console.log(this);
// 	function sayHi2(){ console.log('sayHi', this)}
// 	sayHi2();
// };

// const user = {name: 'Pasha'};
// user.say = sayHi1;
// user.say();
// Тут this берет значение снаружи. Так как сейчас перменных нет, то знаечние будет глобальный объект контекст

// sayHi1();
// // sayHi2(); 

// setTimeout принемает callback. Так же эта функция возвращает числовой инентификатор

// console.log('A');

// const timeId = setInterval(() => {
// 	console.log('D');
// }, 1000);
// // clearTimeout(timeId);

// setTimeout(() => { 
// 	clearInterval(timeId);
// }, 3000)
// console.log('B');
// console.log('C');
// 
// const promise1 = new Promise((res, rej) => {
// 	setTimeout (() => {
// 		res("Good 1")
// 	}, 1000);
// });

// const promise2 = new Promise ((res, rej) => {
// 	setTimeout(() => {
// 		rej("bad 2");
// 	}, 1000)
// });
// const promise3 = new Promise ((res, rej) => {
// 	setTimeout(() => {
// 		res("Good 3");
// 	}, 1000)
// });

// const arrayOfRequest = [
	// const nameUser = [{name: "Pasha"}]
	// fetch('https://jsonplaceholder.typicode.com/todos')
	// .then(data => data.json())
	// .then(todo => console.log(todo))
	// .catch(e => console.log(e))


// 	fetch('https://jsonplaceholder.typicode.com/posts'),
// 	fetch('https://jsonplaceholder.typicode.com/posts/1')
// ]
 
// Promise.allSettled([promise1, promise2, promise3])
// .then(data => console.log(data));


// async / await !!!!!!!!!!!!!!!!!1

const getData = async () => {
	const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	console.log('get answer from server');
	return responce.json()
};

const user = getData().then(user => console.log(user));
