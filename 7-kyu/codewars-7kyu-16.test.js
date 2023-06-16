import {findNextSquare} from "./codewars-7kyu-16"

test("findNextSquare", () => {
    expect(findNextSquare(121)).toBe(144)
    expect(findNextSquare(625)).toBe(676)
    expect(findNextSquare(319225)).toBe(320356)
    expect(findNextSquare(15241383936)).toBe(15241630849)
})
