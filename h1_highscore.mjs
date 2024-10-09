import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);


let sum = 0;
let highest;
let lowest;

for(let i = 0; i <= 4; i++) {
    let numInput = parseFloat(await userInput.question('Nummer: '));
    sum += numInput;
    if(numInput > highest || highest === undefined) {
        highest = numInput;
    }
    if(numInput < lowest || lowest === undefined) {
        lowest = numInput;
    }
}

console.log('Lowest number is', lowest);
console.log('Highest number is', highest);
console.log('Average is', sum / 5);


process.exit();