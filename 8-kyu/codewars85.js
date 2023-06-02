function twiceAsOld(dadYearsOld, sonYearsOld) {
    for (let i = 0; i < 100; i++) {
        if ((dadYearsOld - i) === (sonYearsOld - i) * 2) {
            return i;
        } else if ((dadYearsOld + i) === (sonYearsOld + i) * 2) {
            return i;
        }
    }
}