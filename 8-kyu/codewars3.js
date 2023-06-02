function countSheeps(arrayOfSheep) {
  let sheeps = 0;
  for (i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] !== null && arrayOfSheep[i] !== undefined) {
        if (arrayOfSheep[i]){
            sheeps++;
        }
    }
  }
  return sheeps
  }