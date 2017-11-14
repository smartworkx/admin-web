export const isEmptyObject = (obj) => {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false
    }
  }
  return true
}

export const getValue = (obj, path) => {
  const paths = path.split('.')
  let current = obj
  let i

  for (i = 0; i < paths.length; ++i) {
    current = current[paths[i]]

    if (!current) {
      return undefined
    }
  }
  return current
}
