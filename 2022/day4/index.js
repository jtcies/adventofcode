const fs = require('fs')

const input = fs.readFileSync("./2022/day4/input.txt", "utf-8")
// const input = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8` 

const pairs = input.split('\n')

function compareOverlaps(pair) {
    var [first, second] = pair.split(',')
    var [firstMin, firstMax] = first.split('-').map(Number)
    var [secondMin, secondMax] = second.split('-').map(Number)
    if (firstMin >= secondMin && firstMax <= secondMax) {
        return 1
    } else if (secondMin >= firstMin && secondMax <= firstMax) {
        return 1
    } else {
        return 0
    }
}

function comparePartialOverlaps(pair) {
    var [first, second] = pair.split(',')
    var [firstMin, firstMax] = first.split('-').map(Number)
    var [secondMin, secondMax] = second.split('-').map(Number)
    if (firstMin >= secondMin && firstMin <= secondMax) {
        return 1
    } else if (secondMin >= firstMin && secondMax <= firstMax) {
        return 1
    } else if (firstMax >= secondMin && firstMin <= secondMin) {
        return 1
    } else if (firstMin <= secondMax && firstMax >= secondMax) {
        return 1
    } else {
        return 0
    }
}

const ret = pairs.map(compareOverlaps).reduce((a, b) => a + b, 0)
const ret2 = pairs.map(comparePartialOverlaps).reduce((a, b) => a + b, 0)

console.log(ret, ret2)
