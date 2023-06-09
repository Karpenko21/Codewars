//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"

/*const repeatString = (str, number, delim) => {
    if (number === 0) {
        return ""
    }
    let newStr = str
    for (let i = 1; i <= number; i++) {
        newStr = newStr + delim + str
    }
    return newStr
}*/

const repeatString = (str, number, delim) => {
    if (number === 0) {
        return ""
    } else if (number === 1) {
        return str
    } else {
        let newStr = str
        for (let i = 2; i <= number; i++) {
            newStr = newStr + delim + str
        }
        return newStr
    }
}

/*console.log(repeatString("yo", 3, " ")) //=> "yo yo yo"
console.log(repeatString("yo", 3, ",")) //=> "yo,yo,yo"
console.log(repeatString("yo", 3, ", ")) //=> "yo, yo, yo"
console.log(repeatString("yo", 0, ", ")) //=> ""
console.log(repeatString("yo", 1, ", ")) //=> "yo"*/


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
//

const checkStart = (string, str) => string.toLowerCase().slice(0, str.length) === str.toLowerCase()


/*console.log(checkStart("Incubator", "inc")) // => true
console.log(checkStart("Incubator", "yo")) // => false*/

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.


const truncateString = (str, number) => str.slice(0, num) + '...'

/*
{
    let newStr = ""
    for (let i = 0; i < number; i++) {
        newStr = newStr + str[i]
    }
    return newStr + "..."
}*/

//console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10)) // => "Всем студе..."


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

const getMinLengthWord = (str) => {
    if (str === "" || typeof str !== "string") {
        return null
    } else {
        let array = str.split(' ')
        let word = array[0]
        for (let i = 1; i < array.length; i++) {
            if (word.length > array[i].length) {
                word = array[i]
            }
        }
        return word
    }
}

/*console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи.")) // => "Всем"
console.log(getMinLengthWord("")) // => null
console.log(getMinLengthWord(123)) //=> null
console.log(getMinLengthWord(true)) //=> null
console.log(getMinLengthWord(undefined)) //=> null*/

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => {
    let array = str.toLowerCase().split(" ")
    let newArray = array.map(w => w[0].toUpperCase() + w.slice(1))
    let newStr = newArray[0]
    for (let i = 1; i < newArray.length; i++) {
        newStr = newStr + " " + newArray[i]
    }
    return newStr
}

//console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ")) // => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


const isIncludes = (string, str) => {
    let stringArr = string.toLowerCase().split("")
    let strArr = str.toLowerCase().split("")
    for (let i = 0; i < strArr.length; i++) {
        if (!stringArr.includes(strArr[i])) {
            return false
        }
    }
    return true
}

console.log(isIncludes("Incubator", "Cut")) // => true
console.log(isIncludes("Incubator", "table")) // => false
console.log(isIncludes("Incubator", "inbba")) // => true //*false
console.log(isIncludes("Incubator", "inba")) // => true  //*true
console.log(isIncludes("Incubator", "Incubatorrr")) //=> true //*false

const isIncludes2 = (string, str) => {
    let stringArr = string.toLowerCase().split("")
    let strArr = str.toLowerCase().split("")
    let arrayOfIndexes = []
    for (let i = 0; i < strArr.length; i++) {
        if (stringArr.indexOf(strArr[i]) === -1) {
            return false
        } else if (arrayOfIndexes.includes(stringArr.indexOf(strArr[i]))) {
            return false
        } else {
            arrayOfIndexes.push(stringArr.indexOf(strArr[i]))
        }
    }
    return true
}

console.log(isIncludes2("Incubator", "Cut")) // => true
console.log(isIncludes2("Incubator", "table")) // => false
console.log(isIncludes2("Incubator", "inbba")) // => true //*false
console.log(isIncludes2("Incubator", "inba")) // => true  //*true
console.log(isIncludes2("Incubator", "Incubatorrr")) //=> true //*false
console.log(isIncludes2("Incubator", "Ctut"))

