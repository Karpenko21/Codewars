function abbrevName(name){
    let abbrev="";
    abbrev = abbrev + name[0] +".";
    for (let i = 0; i < name.length; i++) {
        if (name[i] ===" ") {
            abbrev = abbrev + name[i+1];
        }
    }
    return abbrev.toUpperCase();
}