switch (prompt('Введите язык:')) {
    case 'ru':
        alert('Добрый день!');
        break;
    case 'en':
        alert('Good afternoon!');
        break;
    case 'de':
        alert('Guten Tag!');
        break;
    default:
        alert('Ввведите один из 3 языков: ru, en, de');
}
