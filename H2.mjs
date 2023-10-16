import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let gemiddelde = 0;
let first_time = true;
while (gemiddelde <= 25) {
    let new_getal = parseFloat(await userInput.question("Geef een getal in: "));
    gemiddelde += new_getal;
    if (!first_time) {
        gemiddelde /= 2;
    }
    else {
        first_time = false;
    }
}
console.log(gemiddelde);
process.exit();