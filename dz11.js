// 24
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
	case numOrStr === null:
		console.log('ви скасували');
		break;
	case numOrStr.trim() === '':
		console.log('Empty String');
		break;
	case isNaN( +numOrStr ):
		console.log('number is Ba_NaN');
		break;
	default:
	console.log('OK!')
}




// 25


// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let a = '';
let i = 10;
for (; i <= 19; i++) {
a += `${i}, `;
}
console.log(a + i); //Чтобы после 20 не было запятой, последнее значение вписал тут


// Вивести квадрати чисел від 10 до 20.
for(let i = 10; i <= 20; i++) {
	console.log(i ** 2);
}


// Вивести таблицю множення на 7.
let e = 7;
for(let i = 0; i <= 10; i++) {
console.log(`${i} x ${e} = ${e * i}`)
}


// Знайти суму всіх цілих чисел від 1 до 15.
let r = 1;
let sum = 0;
while(r <= 15) {
	sum += r;
	r++;
}
console.log(sum)

// Знайти добуток усіх цілих чисел від 15 до 35.
let g = 1;
for (let j = 15; j <= 35; j++) {
	g *= j;
}
console.log(g);


// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sred = 0;
for(let i = 1; i <= 500; i++) {
	sred += i;
}
console.log(sred / 500)


// Вивести суму лише парних чисел в діапазоні від 30 до 80.
for(let i = 30; i <= 80; i++) {
	if(i % 2 == 0) console.log(i)
}


// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for(let i = 100; i <= 200; i++) {
	if(i % 3 == 0) console.log(i)
}


// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = +prompt('Введите любое натуральное число');

for (let i = 1; i <= number; i++) {
	if (number % i == 0) {
		console.log(`Делители числа: ${i}`);
	}
}


// Визначити кількість його парних дільників.
let number1 = +prompt('Введите любое натуральное число');
let even = 0;
for (let i = 1; i <= number1; i++) {
		if (number1 % i == 0) {
			if (i % 2 == 0){
				even += 1; 
			}
		}
	}
console.log(`Четных делителей числа: ${even}`)



// Знайти суму його парних дільників.
let number3 = +prompt('Введите любое натуральное число');
let sumEven = 0;
for (let i = 1; i <= number3; i++) {
		if (number3 % i == 0) {
			if (i % 2 == 0){
				sumEven += i; 
			}
		}
	}
console.log(`Сумма четных делителей: ${sumEven}`);


// Надрукувати повну таблицю множення від 1 до 10.
for (let q = 1; q <= 10; q++) {
	for(w = 1; w <= 10; w++) {
		console.log(`${q} x ${w} = ${q * w}`)
	}
}



// 26


// - Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let str = '';
let numb1 = 20;
for (; numb1 < 30; numb1 = numb1 + 0.5) {
	str += `${numb1} `;
}
console.log(str + numb1);


// - Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let d = 10
for (let g = 27; d <= 100; d = d + 10) {
		console.log(g * d);
	}
	
	
	// -Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
	let n = prompt('Введите целое число');
	for(let x = 1; x <= 100; x++) {
		if(x * x <= n) {
			console.log(x);
		}
	}
	
	
	// - Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
	
	let num = prompt('Введите целое число');
	
	for(let s = 1; s <= num; s++) {
		for (let j = 2; j <= s; j++) {
		if(s % j == 0 && j < s) {
			break;
		}else if (j == s) {
			console.log(s);
		}
		}
	}
	
	
	// - Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
	
	let number4 = prompt('Введите любое число', ''); //81
	
	for (n = 1; n <= number4; n++) {
		if(Math.pow(3, n) == number4){
			console.log('Можно');
			break;
		} else if(Math.pow(3, n) >= number4) {
			console.log('Нельзя');
			break;
		}
	}