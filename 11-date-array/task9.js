const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '01.02.2000', '01/00/2000', '41.12'];
console.log(arr);

const operations = arr
    .filter(el => ['.', '-', '/']
        .some(char => el.includes(char)))
    .map(el => el.split(/[-/.]/))
    .filter((el => el[0] <= 31 && el[0] > 0 && el[1] <= 12 && el[1] > 0
        || el[1] <= 31 && el[1] > 0 && el[0] <= 12 && el[0] > 0))
    .map(el => el.join('-'))
    .flat()

console.log(operations);