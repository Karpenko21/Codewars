function firstNonConsecutive (arr) {
    if (arr === null || arr === [] || arr.length === 1) {
        return null;
    } else for (let i = 0; i < arr/length; i++) {
        (if arr[i] > 0 && arr[i + 1] === arr[i] + 1) {
            return  null;
        } else (if arr[i] < 0 && arr[i + 1] === arr[i] - 1) {
            return  null;
        }
    }
}