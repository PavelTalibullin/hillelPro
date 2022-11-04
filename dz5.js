//							Задача 11
// Вариант 1 (Метод filter)
// const numArr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
// 	return arr.filter((arr) => a <= arr && b >= arr)
// }

// console.log(filterRange(numArr, 1, 4));
// console.log(numArr);



// Вариант 2 (цикл FOR)
// const numArr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
// 	let resultArr = [];
// 	for(let i = 0; i <= arr.length; i++) {
// 		if(a <= arr[i] && b >= arr[i]) {
// 		resultArr.push(arr[i]);
// 		}
// 	}
// 	return resultArr
// }
// console.log(filterRange(numArr, 1, 4));



// 						Задача 12
// Вариант 1
// const arr = [5, 2, 1, -10, 8];
// arr.sort(function(a, b) {return b - a});
// console.log(arr);



// Вариант 2(стрелочная функция)
// const arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);



// Вариант 3
// const arr = [5, 2, 1, -10, 8];

// function sortingByDecreasing(a, b) {
// 	if (a > b) return -1
// 	if (a == b) return 0
// 	if (a < b) return 1
// }
// console.log(arr.sort(sortingByDecreasing));



// 						Задача 13
// const arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
// 	return arr.slice().sort()
// }
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);
