// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

const sixDigitNumber = Number(prompt("Please enter six-digit number"));

const fiveDigitNumber = sixDigitNumber % 100000;
const firstNumber = (sixDigitNumber - fiveDigitNumber) / 100000;

const fourDigitNumber = fiveDigitNumber % 10000;
const secondNumber = (fiveDigitNumber - fourDigitNumber) / 10000;

const threeDigitNumber = fourDigitNumber % 1000;
const thirdNumber = (fourDigitNumber - threeDigitNumber) / 1000;

const twoDigitNumber = threeDigitNumber % 100;
const forthNumber = (threeDigitNumber - twoDigitNumber) / 100;

const oneDigitNumber = twoDigitNumber % 10;
const fifthNumber = (twoDigitNumber - oneDigitNumber) / 10;

const sixNumber = oneDigitNumber;

if(firstNumber == sixNumber || secondNumber == fifthNumber || thirdNumber == forthNumber) {
    alert(`${sixDigitNumber} is mirrow`);
} else {
    alert(`${sixDigitNumber} is not mirrow`);
}