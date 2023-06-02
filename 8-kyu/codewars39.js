function solution(str){
    let newStr ="";
    for (let char of str) {
        newStr = char + newStr;
    }
    return newStr;
}