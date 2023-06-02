function sumArray(array) {
    let sum = 0;
    let min = array[0];
    let max = array[0];
    if (array === []
        || array === null
        || array.length === 1) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            sum +=array[i];
            if (min > array[i]) {
                min = array[i];
            } else if (max < array[i]) {
                max = array[i];
            }
        }
    }
    return sum - min - max;
}