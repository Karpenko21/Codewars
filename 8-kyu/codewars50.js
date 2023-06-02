const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump > mpg * fuelLeft) {
        return false;
    }
    return true;
}