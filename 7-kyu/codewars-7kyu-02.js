function highAndLow(numbers){
    let array = numbers.split(" ");

    let max = Number(array[0]);
    let min = Number(array[0]);
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) > max) {
            max = array[i];
        } else if (Number(array[i]) < min) {
            min = array[i];
        }
    }
    return max + " " + min;
}