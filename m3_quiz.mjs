import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface(input, output);

let answer;
let score = 0;

console.log('Welkom bij mijn quiz! Beantwoord de volgende 5 vragen:');

console.log('\nVraag 1: Hoe wordt de Wet van behoud van massa ook nog genoemd? De Wet van ...');
answer = await userInput.question('Jouw antwoord: ');
if(answer.toLowerCase() == 'lavoisier'){
    console.log('Goed antwoord!');
    score++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Lavoisier');
}

console.log('\nVraag 2: Welke muziekgroep heeft de bekende hit "Exit Music (for a Film)" gemaakt?');
answer = await userInput.question('Jouw antwoord: ');
if(answer.toLowerCase() == 'radiohead'){
    console.log('Goed antwoord!');
    score++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Radiohead');
}

console.log('\nVraag 3: Waarvoor staat RAM?');
answer = await userInput.question('Jouw antwoord: ');
if(answer.toLowerCase() == 'random-access memory' || answer.toLowerCase() == 'random access memory'){
    console.log('Goed antwoord!');
    score++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Random-Access Memory');
}

console.log('\nVraag 4: Wat is de vierde planeet vanaf de zon?');
answer = await userInput.question('Jouw antwoord: ');
if(answer.toLowerCase() == 'mars'){
    console.log('Goed antwoord!');
    score++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: Mars');
}

console.log('\nVraag 5: Wat is het antwoord op de ultieme vraag over het Leven, het Universum, en Alles?');4
answer = await userInput.question('Jouw antwoord: ');
if(answer == 42){
    console.log('Goed antwoord!');
    score++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: 42');
}

console.log('\nJe hebt', score, 'van de 5 vragen juist beantwoord.');


process.exit();