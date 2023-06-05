function sumArray(array) {
    if (array === null || array === undefined || array.length === 0 || array.length === 1  ) {
        return  0
    } else {
        let newArray = array.sort((a, b) => a - b)
        let sum = array.reduce((sum, el) => sum + el, 0)
        return sum - newArray[0] - newArray[newArray.length-1]
    }
}