const R = require("../rambda")

describe("prepend", () => {
  it("", () => {
    expect(
      R.prepend("yes", [ "foo", "bar", "baz" ])
    ).toEqual([ "yes", "foo", "bar", "baz" ])

    expect(
      R.prepend("foo")([ ])
    ).toEqual([ "foo" ])
  })
})
