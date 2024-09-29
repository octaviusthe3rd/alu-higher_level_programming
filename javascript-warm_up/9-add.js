#!/usr/bin/node
const firstInt = parseInt(process.argv[2]);
const secondInt = parseInt(process.argv[3]);

function add(a, b) {
	return a + b;
}


if (!isNaN(firstInt) && !isNaN(secondInt)) {
	let sum = add(firstInt, secondInt);
	console.log(sum);
}else{
	console.log('Invalid arguments provided. Make sure you to provide only two integer arguments.');
}
