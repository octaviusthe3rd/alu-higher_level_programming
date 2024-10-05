#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) {
    console.error(err);
    return;
  }

  try {
    const results = JSON.parse(body).results || [];
    const count = results.filter(movie =>
      movie.characters && movie.characters.some(character => character.endsWith('/18/'))
    ).length;

    console.log(count);
  } catch (parseError) {
    console.error('Error parsing response:', parseError);
  }
});
