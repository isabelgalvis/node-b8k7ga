import fetch from 'node:fetch';
import http from 'node:http';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
