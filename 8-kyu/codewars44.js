function contamination(text, char){
    let string = "";
    if (text === "" || char === "") {
        return "";
    } else for (let i = 0; i < text.length; i++) {
        string = string + char;    
    }
    return string;
}