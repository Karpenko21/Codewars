function grow(x){
    let multiplying = 1;
    for (let i = 0; i < x.length; i++) {
        multiplying *=x[i];
    }
    return multiplying;
}