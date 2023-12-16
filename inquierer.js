var promptSync = require('prompt-sync')();
var number_1 = parseFloat(promptSync("Enter your first number: "));
var number_2 = parseFloat(promptSync("Enter your second number: "));
var operator = promptSync("Enter your operator (+, -, *, /): ");
if (operator === "+") {
    console.log("Your answer of ".concat(number_1, " ").concat(operator, " ").concat(number_2, " = ").concat(number_1 + number_2));
}
else if (operator === "-") {
    console.log("Your answer of ".concat(number_1, " ").concat(operator, " ").concat(number_2, " = ").concat(number_1 - number_2));
}
else if (operator === "*") {
    console.log("Your answer of ".concat(number_1, " ").concat(operator, " ").concat(number_2, " = ").concat(number_1 * number_2));
}
else if (operator === "/") {
    console.log("Your answer of ".concat(number_1, " ").concat(operator, " ").concat(number_2, " = ").concat(number_1 / number_2));
}
else {
    console.log("Please select a valid operator (+, -, *, /)");
}
