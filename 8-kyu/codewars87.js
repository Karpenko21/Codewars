function arrayMadness(a, b) {
    let squares = 0;
    let cubes = 0;
    for (let i = 0; i < a.length; i++) {
        squares += a[i] ** 2;
    }
    for (let i = 0; i < b.length; i++) {
        cubes += b[i] ** 3;
    }
    return squares > cubes;
}