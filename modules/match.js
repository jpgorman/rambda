function match(regex, str) {
  if (str === undefined) {
    return holder => match(regex, holder)
  }
  const willReturn = str.match(regex)

  return willReturn === null ?
    [] :
    willReturn
}

module.exports = match
