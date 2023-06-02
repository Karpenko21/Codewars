function doubleChar(str) {
    let newStr = "";
    for (let char of str) {
        newStr += char.repeat(2);
    }
    return newStr;
}

