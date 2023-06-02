function getMiddle(s){
    let index = s.length / 2;
    if (s.length%2 === 0) {
        return s[index-1] + s[index];
    } else {
        return s[Math.ceil(index-1)];
    }
}