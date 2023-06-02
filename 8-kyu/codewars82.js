function addLength(str) {
    let arr = str.split(" ");
    let newArray = [];
    for (let arrElement of arr) {
        newArray.push(arrElement + " " + arrElement.length);
    }
   return newArray;
}