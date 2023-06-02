var cubeChecker = function(volume, side){
    if (volume <= 0 || side <= 0) {
        return false;
    } else if (volume === side ** 3) { 
        return true;
    } 
    return false;
  };