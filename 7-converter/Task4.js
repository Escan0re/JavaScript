function currencyConvert(fundsSum, startingCurrency, targetCurrency) {
    const conversionRate = {
        'rub': {
            '$': 91.8
        }
    };
    const rate = conversionRate[startingCurrency][targetCurrency];
    return fundsSum / rate + targetCurrency;
}

console.log(currencyConvert(1000, 'rub', '$'));
