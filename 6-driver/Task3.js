let hasLicence = true;
let age = 18;
let isDrunk = false;

console.log(canDrive(hasLicence, age, isDrunk));

function canDrive(hasLicence, age, isDrunk) {
    return (hasLicence && age >= 18 && !isDrunk);
}