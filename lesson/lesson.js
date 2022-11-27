'use strict';

// const human = {
// 	isHuman: true,
// 	sayHello: () => {},
// };

// function User(name, age) {
// 	// this{}; = Создается пустой объект

// 	this.fullName = name;
// 	this.age = age;

// 	// return this;
// }

// User.prototype = human;

// const user = new User("Pasha", 30);
// console.log(user)


// ----------------------------------------------------------
// ----------------------------------------------------------
// БАЗОВЫЙ СИНТАКСИС

// class Myclass {
// 	// методы класса
// 	constructor () {...}
// 	method1() {...}
// 	method2() {...}
// 	...
// }

// class User {     // Внутри класса место, где инициализируется экземпляр
// 	constructor(name, age) {

// 		// Показываем какие начальные значения полей экзмепляра будут
// 		this.fullName = name; 
// 		this.age = age;
// 	}
// 	sayHello() {
// 		console.log("hello");
// 	}
// }

// const user = new User("Pasha", 27)
// /*
// 1. {} - пустой объект
// 2. call constructor()
// 3. const user = {
// 	fullName = "Pasha";
// 	age = 27;
// }
// */


// console.log(user.sayHello())


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


class Counter {
	constructor(initialValue = 0) {
		this.count = initialValue
	}

	increment() {
		this.count += 1;
	}

	decrement() {
		this.count -= 1;
	}

	reset() {
		this.count = 0;
	}

	getInfo() {
		console.log("Count", this.count)
	}
}
const counter1 = new Counter();

console.log(counter1.count);