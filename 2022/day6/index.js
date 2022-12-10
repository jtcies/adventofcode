const fs = require('fs')

const input = fs.readFileSync("./2022/day6/input.txt", "utf-8")
// const input = ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 'bvwbjplbgvbhsrlpgdmjqwftvncz', 'nppdvjthqldpwncqszvftbrmjlhg', 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw']

function findMarker(signal) {
    var lettersBeforeMarker = 3
    for (let i = 4; i < signal.length + 1; i++) {
        var letters = signal.split('').slice(i - 4, i)
        var letterCount = letters.reduce(function (acc, curr) {
                return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
            }, {});
        if (Object.values(letterCount).every((x) => x === 1)) {
            lettersBeforeMarker++
            break
        } else {
            lettersBeforeMarker++
        }
    }
    return lettersBeforeMarker

}

function findMessage(signal) {
    var lettersBeforeMarker = 13
    for (let i = 14; i < signal.length + 1; i++) {
        var letters = signal.split('').slice(i - 14, i)
        var letterCount = letters.reduce(function (acc, curr) {
                return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
            }, {});
        if (Object.values(letterCount).every((x) => x === 1)) {
            lettersBeforeMarker++
            break
        } else {
            lettersBeforeMarker++
        }
    }
    return lettersBeforeMarker

}

const ret = findMarker(input)
const ret2 = findMessage(input)
// const ret = input.map(findMarker)
// const ret2 = input.map(findMessage)

console.log(ret, ret2)