const { isEvenImparative } = require("../array-helpers")
const nums = [1, 5, 10, 15, 30, 33, 71, 100]
test('example test', () => {
    expect(isEvenImparative(nums)).toStrictEqual([10, 30, 100])
})