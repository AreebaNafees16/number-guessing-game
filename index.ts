#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Cpmputer will generate a random number
// 2. User input for guessing number
// 3. Computer user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1-10",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
} else {
    console.log("You guessed wrong number.");
}
