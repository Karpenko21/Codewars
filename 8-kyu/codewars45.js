function bmi(weight, height) {
    let bmIndex = weight / (height **2);
    if (bmIndex <= 18.5 ) {
        return "Underweight"; 
    } else if (bmIndex <= 25.0) {
        return "Normal";
    } else if (bmIndex <= 30.0) {
        return "Overweight";
    }else if (bmIndex > 30) {
        return "Obese";
    }
}