function sumTwoSmallestNumbers(numbers) {
    let min1 = numbers[0];
    let min2 = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min1 > numbers[i]) {
            min1 = numbers[i];
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if (min2 > numbers[i] && min2 > min1) {
            min2 = numbers[i];
        }
    }
    return min1 + min2;
}