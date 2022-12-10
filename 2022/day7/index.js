const fs = require('fs')

const input = fs.readFileSync("./2022/day7/input.txt", "utf-8")
// const input = `$ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k`

const cmds = input.split(/\n/)
cmds.splice(0, 1)
const cdRegex = new RegExp(/\$ cd [a-z]*/)
const popRegex = new RegExp(/\$ cd \.\./)
const lsRegex = new RegExp(/\$ ls|^dir/)
const fileRegex = new RegExp(/^[0-9]+/)

let files = {'/': 0}
let path = ['/']
for (let cmd = 0; cmd < cmds.length; cmd++) {
    if (lsRegex.test(cmds[cmd])) {
        continue
    } else if (popRegex.test(cmds[cmd])) {
        path.pop()
    } else if (cdRegex.test(cmds[cmd])) {
        path.push(cmds[cmd].replace(/\$ cd /, ''))
    } else if (fileRegex.test(cmds[cmd])) {
        var fileSize = Number(cmds[cmd].replace(/ [a-z]+\.[a-z]+| [a-z]+/, ''))
        // add filesize to each of the parent directories
        var pathSplit = []
        for (let dir = 0; dir < path.length; dir++) {
            pathSplit.push(path[dir])
            if (dir > 0) {
                var dirs = pathSplit.join('/')
            } else {
                var dirs = pathSplit[0]
            }
            // add filesize to dir if it exists, if not create it
            if (!files[dirs]) {
                files[dirs] = fileSize
            } else {
                files[dirs] += fileSize
            }
        }
    }
}

const p1 = Object.values(files).filter(x => x < 100000).reduce((a, b) => a + b, 0)
console.log(p1)

const curAvail = 70000000 - files['/']
const needed =   30000000 - curAvail
const p2 = Object.values(files).filter(x => x >= needed).sort((a, b) => a - b) 

console.log(p2[0])