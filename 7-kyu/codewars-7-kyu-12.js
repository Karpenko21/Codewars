function sumTwoSmallestNumbers(numbers) {
   let newArray = numbers.sort((a, b) => a - b)
    return newArray[0] + newArray[1];
}