#!/usr/bin/node
const fs = require('fs');

const arg = process.argv[2];

fs.readFile(arg, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
