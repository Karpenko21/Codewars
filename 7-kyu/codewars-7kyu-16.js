export function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) {
        return  -1
    } else {
        let i = sq
        while (Math.sqrt(i) % 1 === 0){
            i++
        }
    }
 return i
}