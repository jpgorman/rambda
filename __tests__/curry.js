const R = require("../rambda")

describe("curry", () => {
  it("", () => {
    const addFourNumbers = (a, b, c, d) => a + b + c + d
    const curriedAddFourNumbers = R.curry(addFourNumbers)
    const f = curriedAddFourNumbers(1, 2)
    const g = f(3)
    expect(g(4)).toEqual(10)
  })
})
