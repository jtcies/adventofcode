const fs = require('fs')

const input = fs.readFileSync("./2022/day1/input.txt", "utf-8")
const elves = input.split('\n\n')

var cals = []
for (let elf = 0; elf < elves.length; elf++) {
    cals[elf] = elves[elf].split('\n').map(Number).reduce((a, b) => a + b, 0)
}
//part 1: elf with the most
const max = cals.reduce((a, b) => Math.max(a, b, 0))

//part 2: total of the top three elves
const topThree = cals.map(Number).sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b, 0)

console.log('part 1:', max)
console.log('part 2:', topThree)