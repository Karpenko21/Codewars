function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little",
                     "a lot", "passionately", "madly",
                     "not at all"];
    if (nbPetals <= 6) {
        for (let i = 0; i < 6; i++) {
            switch (nbPetals) {
                case i + 1:
                    return arr[i];
                    break;
                default:
                    break;
            }
        }
    } else {
        if (nbPetals > 6) switch (nbPetals % 6) {
            case 1:
                return arr[0];
                break;
            case 2:
                return arr[1];
                break;
            case 3:
                return arr[2];
                break;
            case 4:
                return arr[3];
                break;
            case 5:
                return arr[4];
                break;
            case 0:
                return arr[5];
                break;
        }
    }
}
