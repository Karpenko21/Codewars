function invert(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray[i] = array[i] * -1;
    }
     return newArray;
  }