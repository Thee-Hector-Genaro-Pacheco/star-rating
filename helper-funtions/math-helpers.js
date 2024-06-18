const isGraterThan = (num1, num2) => num1 > num2
const isLessThan = (num1, num2) => num1 < num2
const isEqual = (num1, num2) => num1 === num2
const isLessThanOrEqual = (num1, num2) => num1 <= num2
const isGraterThanOrEqual = (num1, num2) => num1 >= num2
const isDivisible = (num1, num2) => num1 % num2 === 0
const inNotDivisible = (num1, num2) => num1 % num2 !== 0
const multipleNums = (num1, num2) => num1 * num2
const sqNum = num => Math.sqrt(num)
const isEven = num => isDivisible(num, 2)
// imparative approach to isEven
// function isEvenImp(number) { 
//     if (number % 2 === 0) {
//         return true
//     }
//     else {
//         return false
//     }
    
// } 
const add = (num1, num2) => num1 + num2
function add1(num1, num2) {
    return num1 + num2
}
const enterNum = num => (num === NaN) ? TypeError("invalid type") : num
const enter2Num = (num1, num2) =>  {
    return (num1 === NaN || num2 === NaN) ? TypeError("Inavid Types, Must enter numbers only") : num1 && num2
}


module.exports = { isEven };