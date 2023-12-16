const promptSync = require('prompt-sync')();

let number_1 = parseFloat(promptSync("Enter your first number: "));
let number_2 = parseFloat(promptSync("Enter your second number: "));
let operator = promptSync("Enter your operator (+, -, *, /): ");

if (operator === "+") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 + number_2}`);
} else if (operator === "-") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 - number_2}`);
} else if (operator === "*") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 * number_2}`);
} else if (operator === "/") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 / number_2}`);
} else {
    console.log("Please select a valid operator (+, -, *, /)");
}
