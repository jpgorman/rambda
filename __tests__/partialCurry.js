const R = require("../rambda")

describe("partialCurry", () => {
  it("", () => {
    const fn = ({ a, b, c }) => a * b + c
    const curried = R.partialCurry(fn, { a : 2 })
    expect(R.type(curried)).toEqual("Function")
    expect(curried({
      b : 3,
      c : 10,
    })).toEqual(16)
  })
  it("async", async () => {
    const delay = ms => new Promise(resolve => {
      setTimeout(() => {
        resolve(ms * 2)
      }, ms)
    })
    const fn = async ({ a, b }) => {
      const result = await delay(a)

      return result + b
    }
    const curried = R.partialCurry(fn, { a : 200 })
    expect(R.type(curried)).toEqual("Function")
    expect(await curried({ b : 3 })).toEqual(403)
  })
})
