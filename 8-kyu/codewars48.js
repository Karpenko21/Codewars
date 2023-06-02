const reverseSeq = n => {
    let array = [];
    for (let i = n; n > 0; n--) {
        array.push(n);
    }
    return array;
};