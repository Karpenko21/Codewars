function removeExclamationMarks(s) {
    let newStr = "";
    for (let char of s) {
        if (char !== "!") {
            newStr +=char;
        }
    }
    return newStr;
}