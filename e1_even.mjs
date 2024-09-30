import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let numInput = parseFloat(await userInput.question('Geef een nummer in: '));

if(numInput % 2 == 0){
    console.log(numInput, 'is even.');
}else{
    console.log(numInput, 'is oneven');
}

process.exit();