#!/usr/bin/node

const number = parseInt(process.argv[2]);

function factorial(i) {
  if (isNaN(i)) {
    return 1;
  } else if (i <= 1) {
    return 1;
  } else {
    return i * factorial(i - 1);
  }
}

console.log(factorial(number));

