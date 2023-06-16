// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let summa = 0
    for (let i = 0; i < arguments.length; i++) {
        summa += arguments[i]
    }
    return summa//nums.reduce((summa,item) => summa + item)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && a === c) {
        return "10"
    } else if (a + b <= c || a + c <= b || b + c <= a) {
        return "00"
    } else if (a === b || a === c || c === b) {
        return "01"
    } else {
        return "11"
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    //let str = "" + number
    //let array = str.split('')
    //array.map(n => Number(n)).reduce((sum, item) => sum + item)
    let sum = 0
    while(number > 0) {
        const rest = number % 10
        sum += number%10
        number = (number - rest)/10
    }
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumOdd = 0
    let sumEven = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sumEven += arr[i]
        } else {
            sumOdd += arr[i]
        }
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return sumEven > sumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 1 === 0) {
            newArray.push(array[i] * array[i])
        }
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return newArray
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let sum = 0
    for (let i = 0; i <= N; i++) {
        sum += i
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return sum
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {

    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const newArray = []
    let i = 0

    while (amountOfMoney > 0) {
        if (amountOfMoney >= banknotes[i]) {
            newArray.push(banknotes[i])
            amountOfMoney -= banknotes[i]
        } else { i++}
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return newArray
}