'use ctrict';

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

