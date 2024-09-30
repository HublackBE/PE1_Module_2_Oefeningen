import * as readline from 'node:readline/promises';
import {stdin as  input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

console.log('Kies een artiest:' +
    '\n1. Guns N\' Roses' +
    '\n2. AC/DC' +
    '\n3. Radiohead' +
    '\n4. The Animals');

let groupChoice = await userInput.question('\nGeef je keuze in: ');

switch(groupChoice.toLowerCase()){
    case '1':
    case 'guns n\' roses':
        console.log('\nJe koos voor "Guns N\' Roses"' +
            '\nZe zijn de artist achter de hit: Sweet Child o\' Mine');
        break;

    case '2':
    case 'ac/dc':
        console.log('\nJe koos voor "AC/DC"' +
            '\nZe zijn de artist achter de hit: Thunderstruck');
        break;

    case '3':
    case 'radiohead':
        console.log('\nJe koos voor "Radiohead"' +
            '\nZe zijn de artist achter de hit: Creep');
        break;

    case '4':
    case 'the animals':
        console.log('\nJe koos voor "The Animals"' +
            '\nZe zijn de artist achter de hit: The House of The Rising Sun');
        break;

    default:
        console.log('\nJouw keuze is ongeldig.')
}

process.exit();