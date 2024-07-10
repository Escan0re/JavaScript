const password = 'password';
const checkPassword = 'drowssap';

console.log(password);
Crypto();
Check();

function Crypto() {
    let res = password.split('').reverse().join('');
    console.log(res);
}

function Check() {
    let res = checkPassword.split('').reverse().join('');
    if (res === 'password') {
        return console.log('Доступ разрешен');
    }
    return console.log('Ошибка');
}

