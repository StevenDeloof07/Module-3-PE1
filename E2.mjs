import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

const Getal = await userInput.question("Geef een getal: ");

console.log("De tafel van " + Getal + ":");
for (let i = 1; i <= 10; i++) {
    let product = Getal * i;
    console.log(Getal + " * " + i + " = " + product);
}