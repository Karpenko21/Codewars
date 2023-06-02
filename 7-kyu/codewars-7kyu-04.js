function findShort(s){
    let array = s.split(" ");
    let shortest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length < shortest.length) {
            shortest = array[i];
        }
    }
    return shortest.length;
}