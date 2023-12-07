switch (prompt('Введите язык:')) {
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'en':
        console.log('Good afternoon!');
        break;
    case 'de':
        console.log('Guten Tag!');
        break;
    default:
        console.log('Ввведите один из 3 языков: ru, en, de');
}
