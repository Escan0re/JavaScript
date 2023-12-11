function calculateDistance(x2, y2, x1, y1) {
    const deltaX = x1 - x2;
    const deltaY = y1 - y2;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

const adressLat = 12;
const adressLong = 7;
const positionLat = 8;
const positionLong = 4;

const distance = calculateDistance(adressLat, adressLong, positionLat, positionLong);
console.log(distance);

