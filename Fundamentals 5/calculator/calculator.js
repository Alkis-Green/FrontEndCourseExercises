function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function power(a, b) {
	let p = 1;
	for (let i = 0; i < b; i++) {
		p *= a;
	}
	return p;
}

function factorial(num) {
	if (num < 0)
		return -1;
	else if (num == 0)
		return 1;
	else {
		return (num * factorial(num - 1));
	}
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}