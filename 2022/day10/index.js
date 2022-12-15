const fs = require('fs')

const input = fs.readFileSync("./2022/day10/input.txt", "utf-8").split(/\n/).map(x => x.split(' '))
// const input = `addx 15
// addx -11
// addx 6
// addx -3
// addx 5
// addx -1
// addx -8
// addx 13
// addx 4
// noop
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx -35
// addx 1
// addx 24
// addx -19
// addx 1
// addx 16
// addx -11
// noop
// noop
// addx 21
// addx -15
// noop
// noop
// addx -3
// addx 9
// addx 1
// addx -3
// addx 8
// addx 1
// addx 5
// noop
// noop
// noop
// noop
// noop
// addx -36
// noop
// addx 1
// addx 7
// noop
// noop
// noop
// addx 2
// addx 6
// noop
// noop
// noop
// noop
// noop
// addx 1
// noop
// noop
// addx 7
// addx 1
// noop
// addx -13
// addx 13
// addx 7
// noop
// addx 1
// addx -33
// noop
// noop
// noop
// addx 2
// noop
// noop
// noop
// addx 8
// noop
// addx -1
// addx 2
// addx 1
// noop
// addx 17
// addx -9
// addx 1
// addx 1
// addx -3
// addx 11
// noop
// noop
// addx 1
// noop
// addx 1
// noop
// noop
// addx -13
// addx -19
// addx 1
// addx 3
// addx 26
// addx -30
// addx 12
// addx -1
// addx 3
// addx 1
// noop
// noop
// noop
// addx -9
// addx 18
// addx 1
// addx 2
// noop
// noop
// addx 9
// noop
// noop
// noop
// addx -1
// addx 2
// addx -37
// addx 1
// addx 3
// noop
// addx 15
// addx -21
// addx 22
// addx -6
// addx 1
// noop
// addx 2
// addx 1
// noop
// addx -10
// noop
// noop
// addx 20
// addx 1
// addx 2
// addx 2
// addx -6
// addx -11
// noop
// noop
// noop`.split(/\n/).map(x => x.split(' '))

steps = input.map((x) =>  {
    var ret = x
    ret[1] = parseInt(ret[1])
    return ret
})

let cycle = 1
let register = 1
let registerLog = {}

for (let step = 0; step < steps.length; step++) {
    if (!steps[step][1]) {
        registerLog[cycle] = register
        cycle++
    } else {
        let addStep = 1
        while (addStep > 0) {
            registerLog[cycle] = register
            cycle++
            addStep--
        }
        registerLog[cycle] = register
        cycle++
        register += steps[step][1]
    }
}

const interestingSignals = ['20', '60', '100', '140', '180', '220']
const stregnthVals = []

for (i in interestingSignals) {
    var val = registerLog[interestingSignals[i]]
    var cycleVal = parseInt(interestingSignals[i])
    var strength = val * cycleVal
    stregnthVals.push(strength)
}

const p1 = stregnthVals.reduce((a, b) => a + b, 0)

const pixels = new Array(Object.keys(registerLog).length)

for (let i = 0; i < pixels.length; i++) {
    pixels[i] = '.'
}

for (let i = 0; i < pixels.length; i++) {
    let ypos = (i % 40)
    if (
         ypos >= registerLog[Object.keys(registerLog)[i]] - 1 &
         ypos <= registerLog[Object.keys(registerLog)[i]] + 1
    ) {
        pixels[i] = '#'
    }
}

for (let i = 0; i < pixels.length; i++) {
    if (i % 41 == 0) {
        pixels.splice(i, 0, '\n')
    }
}

p2 = pixels.join('')

console.log(p1)
console.log(p2)

