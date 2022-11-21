'use strict';

//					Задача 18
// Не был уверен как с функцией getData делать, поэтому сперва это написал, работает корректно вроде).

// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(data => data.json())
// .then(post => console.log(post.filter(user => user.userId === 1)))
// .catch(error => console.log(error))


// Тут с getData, так же работает
function getData(url) {
	const responce = fetch(url)
	.then(data => data.json())
	.then (post => post.filter(user => user.userId === 3))
	.catch(error => console.log(error))

	return responce
};

const user = getData('https://jsonplaceholder.typicode.com/posts').then(user => console.log(user));




// 				Задача 19
// const getData = async (url) => {
// const responce = await fetch(url);
// const jsonObj = await responce.json();
// const userFilter = jsonObj.filter(user => user.userId === 2);

// return userFilter
// };

// const user = getData('https://jsonplaceholder.typicode.com/posts').then(user => console.log(user));