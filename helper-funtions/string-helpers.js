const lowerCaseStr = str => str.toLowerCase()
const strToArr = str => [...str]
const isStr = obj => typeof object === "string"
const strIncludes = (str, char) => str.include(char)
const strLen = str => str.length
const reverseStr = compose(
    strToArr,
    reverseArray,
    joinArray
)

const isPalindrome = str => str === reverseStr
const strLenIsNot = (str, len) => str.length !== len
const firstCharInStr = str => str.charAt(0)
const charIdxInStr = (str, idx) => str.charAt(idx)
const idxOfChar = (str, char) => str.indexOf(char)


const splitByDilimeter = (str, char="\\") => str.split(char)

const splitBySpace = string => stringByDilimeter(string, " ")
const urlFriendly = str => str.replace(/ /g, "-").toLowerCase()

function idGen() {
    return 'xxxxxxxxx-xxxx-4xx7-yxxx-xxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = c == 'x' ? r : (r&0x3 | 0x8)
        return v.toString(16)
    })
    
}




const cap1stChar = str => str.CharAt(0).toUpperCase + str.slice(1)
