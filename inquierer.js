"use strict";
// npm i inquirer 
// @types/inquirer 
// install this before coding 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
(async () => {
    let user = await inquirer_1.default.prompt([
        {
            type: "number",
            name: "firstNumber",
            message: "Kindly enter your first number"
        },
        {
            type: "number",
            name: "secondNumber",
            message: "Kindly enter your second number"
        },
        {
            type: "list",
            name: "operator",
            message: "Select your operator",
            choices: ["+", "-", "*", "/"]
        },
    ]);
    console.log(user);
    if (user.operator === "+")
        console.log(`Your answer of ${user.firstNumber + user.secondNumber}`);
    else if (user.operator === "-")
        console.log(`Your answer of ${user.firstNumber - user.secondNumber}`);
    else if (user.operator === "*")
        console.log(`Your answer of ${user.firstNumber * user.secondNumber}`);
    else if (user.operator === "/")
        console.log(`Your answer of ${user.firstNumber / user.secondNumber}`);
    else {
        console.log("Please select a valid operator (+, -, *, /)");
    }
})();
