'use strict';

function performOperation(operation) {
    const firstInputValue = Number(document.querySelector('.firstInput').value);
    const secondInputValue = Number(document.querySelector('.secondInput').value);

    if (!firstInputValue || !secondInputValue) {
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = firstInputValue + secondInputValue;
            break;
        case '-':
            result = firstInputValue - secondInputValue;
            break;
        case '*':
            result = firstInputValue * secondInputValue;
            break;
        case '/':
            if (secondInputValue !== 0) {
                result = firstInputValue / secondInputValue;
            } else {
                alert('Делить на ноль нельзя!');
                return;
            }
            break;
    }

    document.querySelector('.panel').innerText = `Результат операции: ${result}`;
    document.querySelectorAll('.firstInput, .secondInput').forEach(input => input.value = '');
    localStorage.setItem('result', JSON.stringify(result));


}

document.body.addEventListener('click', (event) => {
    const button = event.target;
    if (button.classList.contains('button')) {
        const operation = button.textContent;
        performOperation(operation);
    }
});

