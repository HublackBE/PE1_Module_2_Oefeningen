import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let year = parseFloat(await userInput.question('Geef me een jaar: '));

/*
(else) if prevents further checks if true
=> if year is divisible by 400, it won't check if it is divisible by 100
=> single output
 */
if(year % 400 === 0){
    console.log(year, 'is een schrikkeljaar, februari heeft dus 29 dagen!');
}else if(year % 100 === 0){
    console.log(year, 'is geen schrikkeljaar, februari heeft dus 28 dagen!');
}else if(year % 4 === 0){
    console.log(year, 'is een schrikkeljaar, februari heeft dus 29 dagen!');
}else{
    console.log(year, 'is geen schrikkeljaar, februari heeft dus 28 dagen!');
}


process.exit();