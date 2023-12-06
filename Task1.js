function calculateDistance(x2, y2, x1, y1) {
    const deltaX = x1 - x2;
    const deltaY = y1 - y2;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

const adressLat = 2;
const adressLong = 5;
const positionLat = 6;
const positionLong = 4;

const distance = calculateDistance(adressLat, adressLong, positionLat, positionLong);
console.log(distance);

