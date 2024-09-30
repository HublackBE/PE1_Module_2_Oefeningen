import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

const maximum = 42;
const minimum = -42;

let numInput = parseFloat(await userInput.question('Geef een nummer in: '));

if(minimum < numInput && numInput < maximum){
    console.log(numInput, 'ligt tussen', minimum, 'en', maximum);
}else{
    console.log(numInput, 'ligt niet tussen', minimum, 'en', maximum);
}

process.exit();