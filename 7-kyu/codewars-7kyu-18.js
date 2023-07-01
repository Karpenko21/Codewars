function accum(s) {
    let newArray = s.split('')
    let newS = ""
    for (let i = 0; i < s.length; i++) {
        newS = newS + newArray[i].toUpperCase()
        if (i > 0) {
            for (let j = 0; j < i; j++) {
                newS = newS + newArray[i].toLowerCase()
            }
        }
        newS = newS + '-'
    }
    return newS.slice(0, newS.length-1)
}
