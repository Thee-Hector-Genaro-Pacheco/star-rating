const { isEven } = require("./math-helpers.js")

// import isEven from './math-helpers'
// const letters = [..."hello world"]
// const numbers = [30, 24, 23, 9, 8, 0, 100 ]
// const hello = ["hello"]
// const world = ["world"]


function isEvenImparative(arr) {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
        //const element = arr[i];
        if (isEven(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

const isEvenDeclarative = arr => arr.filter(el => isEven(el))
const reverseArray = arr => arr.reverse()
const arrayToStr = arr => arr.toString()
const joinArray = arr => arr.join("")
const arrayLen = arr => arr.length
const randomElInArray = arr => arr[Math.floor(Math.random() * arrayLen(arr))]

const removeDuplicates = arr => [...new Set(arr)]
const elAtIndex = (arr, idx) => arr[idx]
const idxOfElInArray = (arr, el) => arr.indexOf(el)

const capFirstChar = arr => arr.map(el => el.charAt(0).toUpperCase() + el.slice(1))

const elAtIdx2 = arr => arr.filter((el, idx) => idx === 2)
const concatEl = arr => arr.map(el => "./imgs".concat(el))

function shuffle(arr) {
    const result = []
    const tempArr = [...arr]

    for(let i = 0, arrLen = arrayLen(arr); i < arrLen; i++) {
        const randomEl = randomElInArray(tempArr)
        const idx = idxOfElInArray(tempArr, randomEl)

        result.push(randomEl)
        tempArr.splice(idx, 1)
    }
    return result
}






module.exports = { isEvenImparative };