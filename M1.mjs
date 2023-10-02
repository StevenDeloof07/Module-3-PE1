import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

var som = 0;

do {
    var getal = parseFloat(await userInput.question("Give me a number. give 0 to get the sum of all the numbers: \n"));
    som += getal;
} while (getal > 0);

console.log(som);