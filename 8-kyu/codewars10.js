function howMuchWater(water, load, clothes){
    if (clothes > 2*load) {
        return "Too much clothes";
    } else if (clothes < load) {
        return "Not enough clothes";
    }

    let amountOfWater;
    amountOfWater = water *Math.pow(1.1, (clothes - load));
    return Math.round(amountOfWater*100)/100;
  }