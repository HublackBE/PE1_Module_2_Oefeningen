import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let num1 = parseFloat(await userInput.question('Nummer 1: '));
let operator = await userInput.question('Operator (+, -, *, /, **): ');
let num2 = parseFloat(await userInput.question('Nummer 2: '));

switch(operator){
    case '+':
        console.log(num1, operator, num2, '=', num1 + num2);
        break;
    case '-':
        console.log(num1, operator, num2, '=', num1 - num2);
        break;
    case '*':
        console.log(num1, operator, num2, '=', num1 * num2);
        break;
    case '/':
        console.log(num1, operator, num2, '=', num1 / num2);
        break;
    case '**':
        console.log(num1, operator, num2, '=', num1 ** num2);
        break;
    default:
        console.log('Je gebruikt geen juiste symbolen.')
}

process.exit();