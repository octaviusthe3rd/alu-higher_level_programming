#!/usr/bin/node
const userInput = parseInt(process.argv[2]);
const output = 'C is fun';

if (!isNaN(userInput)) {
  for (let i = 0; i < userInput; i++) {
    console.log(output);
  }
} else {
  console.log('Missing number of occurrences');
}

