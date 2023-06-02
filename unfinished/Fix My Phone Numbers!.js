function isItANum(str) {
    let number = "";
    let space = false;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            number += str[i] ;
        } else {
            if (str[i] === " ") {
                space = true;
            }
        }
    }
    if (number[0] === "0" && number.length === 11 && space === false) {
        return  number;
    } else {
        return "Not a phone number"
    }
}