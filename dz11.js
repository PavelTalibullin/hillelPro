// 27

function unique(arr) {
	return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values)); // Hare,Krishna,:-O

// 28

let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys)