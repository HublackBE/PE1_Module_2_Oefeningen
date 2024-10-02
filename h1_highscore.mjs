import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let numbers = [];

for(let i = 0; i <= 4; i++) {
    let numInput = parseFloat(await userInput.question('Nummer: '));
    numbers.push(numInput);
}

let highestNum = numbers[0];

for(let i = 1; i <= 4; i++){
    if(numbers[i] > highestNum){
        highestNum = numbers[i];
    }
}
console.log('Het hoogste getal is', highestNum);

let lowestNum = numbers[0];

for(let i = 1; i < 5; i++){
    if(numbers[i] < lowestNum){
        lowestNum = numbers[i];
    }
}
console.log('Het laagste getal is', lowestNum);

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log('Het gemiddelde is', sum / 5);


process.exit();
