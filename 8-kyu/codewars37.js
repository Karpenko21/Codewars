function findAverage(array) {
   let sum = 0;
   let count = 0;
   if (array.length === 0) {
    return 0;
  } else for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    count = count + 1;
  }
  return sum/count;
}