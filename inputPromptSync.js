const prompt = require('prompt-sync')();
const name = prompt('What is your name?',value='No one');
console.log(`Hey there ${name}`);