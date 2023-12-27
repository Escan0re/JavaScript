function currencyConvert(fundsSum, startingCurrency, targetCurrency) {
    const conversionRate = {
        'rub': {
            '$': 91.8
        }
    };
    if (startingCurrency === 'rub' && targetCurrency === '$') {
        const rate = conversionRate[startingCurrency][targetCurrency];
        return fundsSum / rate + '$';
    }
    return NaN;
}

console.log(currencyConvert(1000, 'rub', '$'));
