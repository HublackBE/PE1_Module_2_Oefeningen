import * as readline from 'node:readline/promises';
import {stdin as  input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

console.log('Kies een artiest:' +
    '\n1. Guns N\' Roses' +
    '\n2. AC/DC' +
    '\n3. Radiohead' +
    '\n4. The Animals');

let groupChoice = (await userInput.question('\nGeef je keuze in: ')).toLowerCase();

if(groupChoice == '1' || groupChoice == 'guns n\' roses'){
    console.log('\nJe koos voor "Guns N\' Roses"' +
        '\nZe zijn de artist achter de hit: Sweet Child o\' Mine');
}else if(groupChoice == '2' || groupChoice == 'ac/dc'){
    console.log('\nJe koos voor "AC/DC"' +
        '\nZe zijn de artist achter de hit: Thunderstruck');
}else if(groupChoice == '3' || groupChoice == 'radiohead'){
    console.log('\nJe koos voor "Radiohead"' +
        '\nZe zijn de artist achter de hit: Creep');
}else if(groupChoice == '4' || groupChoice == 'the animals'){
    console.log('\nJe koos voor "The Animals"' +
        '\nZe zijn de artist achter de hit: The House of The Rising Sun')
}else{
    console.log('\nJouw keuze is ongeldig.')
}

process.exit();