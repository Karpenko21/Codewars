function betterThanAverage(classPoints, yourPoints) {
    let average = 0; 
    let sumPoints = 0;
    let countOfPoints = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sumPoints = sumPoints + classPoints[i];
        countOfPoints = countOfPoints + 1; 
    }
    sumPoints = sumPoints + yourPoints;
    countOfPoints++;
    average = sumPoints / countOfPoints;
    if (yourPoints > average) {
        return true;
    }
    return false;
}