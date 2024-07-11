const Filter = array = [3, 6, 9 ,2];
console.log(FilterFunction(array)(5));


function FilterFunction(array) {
    return function (comparisonNumber) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= comparisonNumber) {
                continue;
            } else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
}

