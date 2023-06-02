function divisibleBy(numbers, divisor){
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}