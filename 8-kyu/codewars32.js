
function countPositivesSumNegatives(input) {
    let positives = 0;
    let negatives = 0;
    if (input === null || input.length === 0) {
      return [];
    } else for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positives++;
        } else  if (input[i] < 0) {
            negatives = negatives + input[i];
    }
  }
  return [positives, negatives];
}