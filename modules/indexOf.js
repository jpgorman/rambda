function indexOf(question, arr) {
  if (arr === undefined) {
    return holder => indexOf(question, holder)
  }

  let index = -1
  const length = arr.length

  while (++index < length) {
    if (arr[ index ] === question) {
      return index
    }
  }

  return -1
}

module.exports = indexOf
