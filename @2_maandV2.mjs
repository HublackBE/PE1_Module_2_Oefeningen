import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let month = await userInput.question('Geef me een maand: ');
let year = await userInput.question('Geef me een jaar: ');
let februariExtra;

if(year % 400 === 0){
    februariExtra = 1;
}else if(year % 100 === 0){
    februariExtra = 0;
}else if(year % 4 === 0){
    februariExtra = 1;
}else{
    februariExtra = 0
}

switch(month.toLowerCase()){
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        console.log(month, 'heeft dan 31 dagen.');
        break;
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        console.log(month, 'heeft dan 30 dagen.');
        break;
    case 'februari':
        console.log(month, 'heeft dan', 28 + februariExtra ,'dagen.');
        break;
    default:
        console.log(month, 'bestaat niet als maand.');
}


process.exit();