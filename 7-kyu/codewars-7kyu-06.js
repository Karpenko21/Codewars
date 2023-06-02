function maskify(cc) {
    let newStr = "";
    for (let i = 0; i < (cc.length - 4) ; i++) {
        newStr +="#";
    }
    return  newStr + cc.substr(-4, 4);
}
