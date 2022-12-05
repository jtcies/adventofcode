const fs = require('fs')

// const input = fs.readFileSync("./2022/day3/input.txt", "utf-8")
const input = 'vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw'
const rucksacks = input.split("\n")
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upper = alpha.map((x) => String.fromCharCode(x));
const lower = alpha.map((x) => String.fromCharCode(x).toLowerCase());
const letters = lower.concat(upper)

function countItems(x) {
    var len = x.length
    var lenEach = len / 2
    const comp1 = x.slice(0, lenEach)
    const comp2 = x.slice(lenEach, len)
    const items1 = comp1.split("")
    const items2 = comp2.split("")
    const item1Count = items1.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    const item2Count = items2.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    const common = items1.filter(a => items2.includes(a))[0]
    return letters.indexOf(common) + 1
}

function findBadge(x) {
    var items1 = x[0].split("")
    var items2 = x[1].split("")
    var items3 = x[2].split("")
    const item1Count = items1.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    const item2Count = items2.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    const item3Count = items3.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    const common1 = items1.filter(a => items2.includes(a))
    const common2 = common1.filter(a => items3.includes(a))[0]
    return letters.indexOf(common2) + 1
}


const ret = rucksacks.map(countItems).reduce((a, b) => a + b, 0)

var rucksacks2 = rucksacks

score2 = 0
while (rucksacks2.length > 1) {
    var group = rucksacks2.splice(0, 3)
    var badgeScore = findBadge(group)
    score2 += badgeScore
}

const dict = letters.reduce((accumulator, value, index) => {
    return {...accumulator, [index + 1]: value};
  }, {});

console.log(ret)
console.log(score2)