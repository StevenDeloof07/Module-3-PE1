import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

const height = await userInput.question("Give the height of the star: ");
if (height % 2 == 0) {
    const half_height = height / 2;
    let star_amount = 0
    for (let i = 1; i <= half_height; i++) {
        let star = "";
        star_amount += 2;
        let position = half_height - i;
        for (let j = 0; j < position; j++) {
            star += " ";
        }
        for (let j = 0; j < star_amount; j++) {
            star += "*";
        }
        console.log(star);
    }
    for (let i = 1; i <= half_height; i++) {
        let star = ""
        star_amount -= 2;
        for (let j = 0; j < i; j++) {
            star += " ";
        }
        for (let j = 0; j < star_amount; j++) {
            star += "*";
        }
        console.log(star);
    }
}
else {
    const middle_heigth = (height / 2) + 0.5;
    var star = "";
    for (let i = 0; i < middle_heigth; i++) {
        star += " ";
    }
    star += "*"
    console.log(star)
    var star_amount = 3
    for (let i = 1; i < middle_heigth; i++) {
        star = ""
        let position = middle_heigth - i;
        for (let j = 0; j < position; j++) {
            star += " ";
        }
        for (let j = 0; j < star_amount; j++) {
            star += "*"
        }
        console.log(star);
        star_amount += 2;
    }
    star_amount -= 4;
    for (let i = 1; i < middle_heigth; i++) {
        star = "";
        for (let j = 0; j <= i; j++) {
            star += " ";
        }
        for (let j = 0; j < star_amount; j++) {
            star += "*"
        }
        console.log(star);
        star_amount -= 2;
    }
}
process.exit()