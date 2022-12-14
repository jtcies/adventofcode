const fs = require('fs')

const input = fs.readFileSync("./2022/day8/input.txt", "utf-8").split(/\n/)
// const input = 
// `30373
// 25512
// 65332
// 33549
// 35390`.split(/\n/)

const x = input[0].length
const y = input.length
const matrix = input.map(x => x.split(''))
var visible = []
var viewingScores = []

for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
        var val = matrix[i][j]
        var rowValsLeft = []
        var rowValsRight = []
        for (let q = 0; q < x; q++) {
            if (q < j) {
                rowValsLeft.push(matrix[i][q])
            }
            if (q > j) {
                rowValsRight.push(matrix[i][q])
            }
        }
        var colValsUp = []
        var colValsDown = []
        for (let z = 0; z < y; z++) {
            if (z < i) {
                colValsUp.push(matrix[z][j])
            }
            if (z > i) {
                colValsDown.push(matrix[z][j])
            }
        }
        var heights = [rowValsLeft.reverse(), rowValsRight, colValsUp.reverse(), colValsDown]

        var treeViewingScore = []
        var treeVisible = 0
        for (let elem = 0; elem < heights.length; elem++) {
            var viewDist = 0
            for (let tree = 0; tree < heights[elem].length; tree++) {
                if (heights[elem][tree] >= val) {
                    viewDist++
                    break
                } else {
                    viewDist++
                }
            }
            treeViewingScore.push(viewDist)
            if (heights[elem].filter(x => x >= val).length == 0) {
                treeVisible++
            }
        }
        visible.push(treeVisible)
        viewingScores.push(treeViewingScore)
    }
}

const p1 = visible.filter(x => x > 0).length
const p2 = viewingScores.map((x) => x.reduce((a, b) => a * b, 1)).sort((a, b) => b - a)[0]

console.log(p1)
console.log(p2)
