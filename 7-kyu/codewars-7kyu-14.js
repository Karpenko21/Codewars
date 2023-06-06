function removeSmallest(numbers) {
    if (numbers === []) {
        return []
    } else {
        let min = numbers[0]
        let iMin = 0
        for (let i = 1; i <numbers.length; i++) {
            if ( min > numbers[i]) {
                min = numbers[i]
                iMin = i
            }
        }
        return numbers.filter((n, i) => i !== iMin );
    }
}