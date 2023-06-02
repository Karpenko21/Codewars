function fakeBin(x){
    let newString ="";
    for (let char of x) {
       if (parseInt(char) < 5){
        newString +="0";
       } else if (parseInt(char) >= 5) {
        newString += "1"; 
       }
    }
    return newString;
}