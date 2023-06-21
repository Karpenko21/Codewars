export function findNextSquare(sq) {
    let res = sq + 1
    if (Math.sqrt(sq) % 1 !== 0) {
        return  -1
    } else {
        while (Math.sqrt(res) % 1 !== 0){
            res++
        }
        return res
    }
}
