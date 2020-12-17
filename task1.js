// Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру и информацию о том чётная она, или нет.

const nDigitNumber = Number (prompt("Please enter a number"));
const lastNumber = nDigitNumber % 10;
const reminderofDivision = lastNumber % 2;

if (reminderofDivision == 0) {
    alert(`${nDigitNumber} is even`);
} else {
    alert(`${nDigitNumber} is odd`);
}