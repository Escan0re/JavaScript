let originalString = 'password';
console.log(originalString);
console.log(Crypto(originalString));
console.log(Check(Crypto(originalString)));


function Crypto(str) {
    return TwoPointers(str);
}

function Check(str) {
    return TwoPointers(str);
}

function TwoPointers(str) {
    let char = str.split('');
    let left = 0;
    let right = char.length - 1;
    while (left < right) {
        [char[left], char[right]] = [char[right], char[left]];
        left++;
        right--;
    }
    return char.join('')
}

