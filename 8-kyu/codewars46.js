var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    } else if (humanYears > 2) {
        catYears = 15 + 9 + (4 * (humanYears - 2));
        dogYears = 15 + 9 + (5 * (humanYears - 2));
    }
    return [humanYears, catYears, dogYears];
}