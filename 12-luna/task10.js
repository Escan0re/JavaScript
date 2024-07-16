const cardNumber = '4561-2612-1234-5464';

function Luna(number) {
    number = number.replaceAll('-', '');
    let newArrayOfNumbers = [];
    let trueArrayOfNumbers = [];

    for (let i in number) {
        if (i % 2 === 0) {
            newArrayOfNumbers.push(number[i] * 2);

        } else newArrayOfNumbers.push(number[i]);
    }
    for (let el of newArrayOfNumbers) {
        if (el > 9) {
            trueArrayOfNumbers.push(el - 9);
        } else trueArrayOfNumbers.push(el * 1);
    }
    let isValid = trueArrayOfNumbers.reduce((acc, value) => acc + value, 0);
    return isValid % 10 === 0;
}

console.log(cardNumber);
console.log(Luna(cardNumber));


