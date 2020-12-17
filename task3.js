// Дано трехзначное число. 
// Определить является ли четной сумма его цифр. 
// Определить, кратна ли сумма его цифр пяти. 
// Определить является ли произведение его цифр больше 100. 

const threeDigitNumber = Number(prompt("Please enter three-digit number"));
const twoDigitNumber = threeDigitNumber % 100;
const firstNumber = (threeDigitNumber - twoDigitNumber) / 100;
const oneDigitNumber = twoDigitNumber % 10;
const secondNumber = (twoDigitNumber - oneDigitNumber) / 10;
const thirdNumber = oneDigitNumber;
const sumofthreeDigits = firstNumber + secondNumber + thirdNumber;
const reminderofDivision = sumofthreeDigits % 2;
const lastdigitofsum = sumofthreeDigits % 10;
const multiplicationofthreeDigits = firstNumber * secondNumber * thirdNumber;


if(reminderofDivision == 0 ) {
    alert(`${sumofthreeDigits} is even`);
} else {
    alert(`${sumofthreeDigits} is odd`);
}

if(lastdigitofsum == 0) {
    alert(`${sumofthreeDigits} is divisible by 5`);
} else if(lastdigitofsum == 5) {
    alert(`${sumofthreeDigits} is divisible by 5`);
} else {
    alert(`${sumofthreeDigits} is not divisible by 5`);
}

if(multiplicationofthreeDigits > 100 ) {
    alert(`${multiplicationofthreeDigits}  > 100`);
} else {
    alert(`${multiplicationofthreeDigits} < 100`);
}