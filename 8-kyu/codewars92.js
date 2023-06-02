function digitize(n) {
    let array = ("" + n).split("").map(Number)
    return array.sort(function (a, b) {return a - b;});
}