const fs = require('fs')

const [input, moves] = fs.readFileSync("./2022/day5/input.txt", "utf-8").split('\n\n')
// const [input, moves] = 
// `   [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`.split('\n\n')

// const cols = 3
// stacks = {1: [], 2: [], 3: []}
const cols = 9
const stacks = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []}

const boxesRaw = input.replaceAll("   ", "0").split(/\n/)
const boxesStart = boxesRaw.map((x) => x.replaceAll(/[^a-z0-9]/gmi, "")).splice(0, boxesRaw.length - 1).reverse().join("")

for (let i = 0; i < boxesStart.length; i++) {
    var col = i % cols + 1
    if (boxesStart[i] !== '0') {
        stacks[col].push(boxesStart[i])
    }
}


const movesClean = moves.split('\n').map((x) => x.replaceAll(/to|from/gi, ",").replaceAll(/move/gi, ''))

function moveCrate(stacks, move) {
    const [count, from, to] = move.split(',').map(Number)
    var numToMove = Number(count)
    for (let i = 0; i < count; i++) {
        var onTop = stacks[from].pop()
        stacks[to].push(onTop)
    }
    return stacks
}

for (let i = 0; i < movesClean.length; i++) {
    moveCrate(stacks, movesClean[i])
}

const top = []
for (let i = 0; i < cols; i++) {
    var onTop = stacks[i + 1].pop()
    top.push(onTop)
}

const ret = top.join('')

//part 2
const stacks2 = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []}
for (let i = 0; i < boxesStart.length; i++) {
    var col = i % cols + 1
    if (boxesStart[i] !== '0') {
        stacks2[col].push(boxesStart[i])
    }
}

console.log(stacks2)

function moveCrate2(stacks, move) {
    const [count, from, to] = move.split(',').map(Number)
    const index = -count
    var onTop = stacks[from].splice(index)
    stacks[to].push(...onTop)
    return stacks
}

for (let i = 0; i < movesClean.length; i++) {
    moveCrate2(stacks2, movesClean[i])
}

console.log(stacks2)

const top2 = []
for (let i = 0; i < cols; i++) {
    var onTop = stacks2[i + 1].pop()
    top2.push(onTop)
}

const ret2 = top2.join('')

console.log(ret, ret2)