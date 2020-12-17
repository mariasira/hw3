// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

const twoDigitNumber = Number (prompt("Please enter a number"));
const secondNumber = twoDigitNumber % 10;
const firstNumber = (twoDigitNumber - secondNumber) / 10;

if (firstNumber>secondNumber) {
    alert(`${firstNumber}>${secondNumber}`);
} else {
    alert(`${secondNumber}>${firstNumber}`);
}