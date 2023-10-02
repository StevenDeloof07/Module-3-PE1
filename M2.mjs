import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

const height = await userInput.question("Give the height of the pyramid: ");

for (let i = 1; i <= height; i++) {
    let j = 0;
    var star_amount = "";
    while (j < i) {
        star_amount += "*";
        j++
    }
    console.log(star_amount);
}
process.exit()