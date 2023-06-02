function century(year) {
    let countCentury;
    if (year%100 === 0) {
        countCentury = year/100;
    } else {
        countCentury = Math.floor(year/100) + 1;
    }
    return countCentury;
}