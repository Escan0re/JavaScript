const oldArray = [1, 40, -5, 10, 0];
console.log(oldArray);
Sort(oldArray);

function Sort(array) {
    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
}
