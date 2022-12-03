const fs = require('fs')

const input = fs.readFileSync("./2022/day2/input.txt", "utf-8")
// const input = 'A Y\nB X\nC Z'
const rounds = input.split(/\r?\n/)

// x opp, y = me
// lose = 0, draw = 3, win = 6
// x + 1 for rock, 2 for paper, 3 for scissors
const outcomes1 = [
    [4, 8, 3], //opp rock
    [1, 5, 9], //opp paper
    [7, 2, 6] // opp scissors
]

const outcomes2 = [
    [3, 4, 8], //opp rock
    [1, 5, 9], //opp paper
    [2, 6, 7] // opp scissors
]

const Recode = (x) => {
    const recode = {
        'A': '0', 'B': '1', 'C': '2',
        'X': '0', 'Y': '1', 'Z': '2'
    }
    const ret = x.replace(/[A-Z]/gi, y => recode[y])
    return ret
}

const PlayGameRound1 = (choices) => {
    const eachChoice = choices.split(' ')
    const recoded =  eachChoice.map(Recode)
    const recodedNum = recoded.map(Number)
    return outcomes1[recodedNum[0]][recodedNum[1]]
}

const PlayGameRound2 = (choices) => {
    const eachChoice = choices.split(' ')
    const recoded =  eachChoice.map(Recode)
    const recodedNum = recoded.map(Number)
    return outcomes2[recodedNum[0]][recodedNum[1]]
}

// replace abc,xyz with 0, 1, 2
console.log('part 1: ', rounds.map(PlayGameRound1).reduce((a, b) => a + b, 0))
console.log('part 2: ', rounds.map(PlayGameRound2).reduce((a, b) => a + b, 0))
