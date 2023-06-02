function bonusTime(salary, bonus) {
    if (bonus) {
        return `\u00A3${10 * salary}`;
    } else {
        return  `\u00A3${salary}`;
    }
}