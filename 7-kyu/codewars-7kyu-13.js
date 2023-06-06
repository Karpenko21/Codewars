function oddOrEven(array) {
    let sum = array.reduce((sum, el) => {return sum + el}, 0)
    if (sum % 2 === 0 || array === []) {
        return "even"
    } else {
        return "odd"
    }
}