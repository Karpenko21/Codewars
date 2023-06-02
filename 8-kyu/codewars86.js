function well(x){
    let number = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            number++
        }
    }
    if (number < 3 && number >0) {
        return  'Publish!'
    } else if (number > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}