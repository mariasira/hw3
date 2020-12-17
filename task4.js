// Дано трехзначное число. 
// Верно ли, что все его цифры одинаковые? 
// Есть ли среди его цифр одинаковые?
const threeDigitNumber = Number(prompt("Please enter three-digit number"));
const twoDigitNumber = threeDigitNumber % 100;
const firstNumber = (threeDigitNumber - twoDigitNumber) / 100;
const oneDigitNumber = twoDigitNumber % 10;
const secondNumber = (twoDigitNumber - oneDigitNumber) / 10;
const thirdNumber = oneDigitNumber;

if(firstNumber == secondNumber && secondNumber == thirdNumber && firstNumber == thirdNumber) {
    alert(`digits of the number are equal`);
} else if(firstNumber == secondNumber || secondNumber == thirdNumber || firstNumber == thirdNumber) {
    alert(`the number contains equal digits`);
} else {
    alert(`there are no equal digits in the number`);
}