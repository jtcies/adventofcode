
const fs = require('fs')

const input = fs.readFileSync(
    "./2022/day9/input.txt", "utf-8"
).split(/\n/).map(x => x.split(' '))
// const input = 
// `R 4
// U 4
// L 3
// D 1
// R 4
// D 1
// L 5
// R 2`.split(/\n/).map(x => x.split(' '))

steps = input.map((x) =>  {
    var ret = x
    ret[1] = parseInt(ret[1])
    return ret
})

var start = [0, 0]
var ropeLength = 10
var knotPositions = new Array(ropeLength)

for (let i = 0; i < ropeLength; i++) {
    knotPositions[i] = [0, 0]
}

const knotLocations = {1: {}, 2: {}, 3: {}, 4: {}, 5: {},
6: {}, 7: {}, 8: {},  9: {}, 10: {}}

const keys = Object.keys(knotLocations)
for (let i = 0; i < keys.length; i++) {
    knotLocations[keys[i]][start] = 1
}

for (let step = 0; step < input.length; step++) {
    let numSteps = steps[step][1]
    while (numSteps > 0) {
        // move the head
        if (steps[step][0] === 'R') {
            knotPositions[0][0] += 1
        } else if (steps[step][0] === 'L') {
            knotPositions[0][0] -= 1
        } else if (steps[step][0] === 'U') {
            knotPositions[0][1] += 1
        } else if (steps[step][0] === 'D') {
            knotPositions[0][1] -= 1
        } else {
            console.log('error')
        }
        if (!knotLocations[keys[0]][knotPositions[0]]) {
            knotLocations[keys[0]][knotPositions[0]] = 1
        } else {
            knotLocations[keys[0]][knotPositions[0]]++
        }
        for (let knot = 1; knot < ropeLength; knot++) {
        //move the following knots one at a time
        // if same horiz
            if (knotPositions[knot - 1][1] === knotPositions[knot][1]) {
                if (knotPositions[knot - 1][0] - 1 > knotPositions[knot][0]) {
                    knotPositions[knot][0]++
                } else if (knotPositions[knot - 1][0] + 1 < knotPositions[knot][0]) {
                    knotPositions[knot][0]--
                }
            } else if (knotPositions[knot - 1][0] === knotPositions[knot][0] ) {
                // same veritcal
                if (knotPositions[knot - 1][1] - 1 > knotPositions[knot][1]) {
                    knotPositions[knot][1] ++
                } else if (knotPositions[knot - 1][1] + 1 < knotPositions[knot][1]) {
                    knotPositions[knot][1]--
                }
            // move diagonally
            } else if (
                (knotPositions[knot - 1][0] - 1 > knotPositions[knot][0] && knotPositions[knot - 1][1] > knotPositions[knot][1]) || 
                (knotPositions[knot - 1][0] > knotPositions[knot][0] && knotPositions[knot - 1][1] - 1 > knotPositions[knot][1])) {
                    knotPositions[knot][0]++
                    knotPositions[knot][1]++
            } else if (
                (knotPositions[knot - 1][0] - 1 > knotPositions[knot][0] && knotPositions[knot - 1][1] < knotPositions[knot][1]) ||
                (knotPositions[knot - 1][0] > knotPositions[knot][0] && knotPositions[knot - 1][1] + 1 < knotPositions[knot][1]) 
            ) {
                knotPositions[knot][0]++
                knotPositions[knot][1]--
            } else if (
                (knotPositions[knot - 1][0] + 1 < knotPositions[knot][0] && knotPositions[knot - 1][1] < knotPositions[knot][1]) ||
                (knotPositions[knot - 1][0] < knotPositions[knot][0] && knotPositions[knot - 1][1] + 1 < knotPositions[knot][1])
                ) {
                knotPositions[knot][0]--
                knotPositions[knot][1]--
            } else if (
                (knotPositions[knot - 1][0] + 1 < knotPositions[knot][0] && knotPositions[knot - 1][1] > knotPositions[knot][1]) ||
                (knotPositions[knot - 1][0] < knotPositions[knot][0] && knotPositions[knot - 1][1] - 1 > knotPositions[knot][1])
            ) {
                knotPositions[knot][0]--
                knotPositions[knot][1]++
            }
            if (!knotLocations[keys[knot]][knotPositions[knot]]) {
                knotLocations[keys[knot]][knotPositions[knot]] = 1
            } else {
                knotLocations[keys[knot]][knotPositions[knot]]++
            }
        }
    numSteps--
    }
}

var visited = []
for (let i = 0; i < keys.length; i++) {
   visited.push(Object.keys(knotLocations[keys[i]]).length)
}

console.log(visited[1], visited[9])
