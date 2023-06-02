function multipleOfIndex(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i]%i === 0 ) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}