#!/usr/bin/node
const arg = process.argv.slice(2);

if (arg.length <= 1) {
  console.log(0);
} else {
  const numbers = arg.map(Number);
  let biggest = numbers[0];
  let secondBiggest = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      secondBiggest = biggest;
      biggest = numbers[i];
    } else if (numbers[i] > secondBiggest && numbers[i] < biggest) {
      secondBiggest = numbers[i];
    }
  }

  console.log(secondBiggest);
}
