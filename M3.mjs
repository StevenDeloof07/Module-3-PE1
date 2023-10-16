import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let prime_number = true;
let number = parseFloat(await userInput.question("Give me your number: "));
for (let i = 2; i < number - 1; i++) {
    if (number % i == 0) {
        prime_number = false;
    } 
}
if (prime_number == true) {
    console.log("Dit is een priemgetal");
}
else {
    console.log("Dit is geen priemgetal");
}
process.exit();