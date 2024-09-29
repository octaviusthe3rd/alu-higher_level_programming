#!/usr/bin/node
const add = require('./add').add;
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

if (!isNaN(a) && !isNaN(b)) {
  console.log(add(a, b));
} else {
  console.log('Please provide two valid integers as arguments');
}
