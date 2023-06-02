function findNeedle(haystack) {
    let index;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i]=== "needle") {
            index = i;
        }
    }
    return "found the needle at position " + index;
}