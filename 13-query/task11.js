const obj = {
    search: 'Вася',
    take: 10,
}

function objectToQueryParams(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
}

console.log(objectToQueryParams(obj));

