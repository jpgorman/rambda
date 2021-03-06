const type = require("./type")

function equals(a, b) {
  if (b === undefined) {

    return holder => equals(a, holder)
  } else if (a === b) {

    return a !== 0 || 1 / a === 1 / b
  }
  const aType = type(a)
  if (aType !== type(b)) {
    return false
  }

  if (aType === "Array") {
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    return aClone.sort().toString() === bClone.sort().toString()
  }

  if (aType === "Object") {
    const aKeys = Object.keys(a)
    if (aKeys.length === Object.keys(b).length) {
      if (aKeys.length === 0) {
        return true
      }
      let flag = true
      aKeys.map(val => {
        if (flag) {
          const aValType = type(a[ val ])
          const bValType = type(b[ val ])
          if (aValType === bValType) {
            if (aValType === "Object") {
              if (Object.keys(a[ val ]).length === Object.keys(b[ val ]).length) {
                if (Object.keys(a[ val ]).length !== 0) {
                  if (!equals(a[ val ], b[ val ])) {
                    flag = false
                  }
                }
              } else {
                flag = false
              }
            } else if (!equals(a[ val ], b[ val ])) {
              flag = false
            }
          } else {
            flag = false
          }
        }
      })

      return flag
    }
  }

  return false
}

module.exports = equals
