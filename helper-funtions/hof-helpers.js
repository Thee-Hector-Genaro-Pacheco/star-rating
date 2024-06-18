const compose = (...fns) => (arg) => fns.reduce((compose, f) => f(compose))

const avatarHOF = compose(
    splitByDilimeter,
    elAtIdx2,
    concatEl,
    arrayToStr
)

// const capFirstLetters = compose(
//     splitBySpace,
//     capFirstChar,
//     arrayToStr,
//     removeCommas
// )

const reverseStr = compose(
    strToArr,
    reverseArray,
    joinArray
)
