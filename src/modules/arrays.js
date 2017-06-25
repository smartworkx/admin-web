import _ from 'lodash'

export const groupBy = (array, propertyToGroupBy) => {
  return array.reduce(function (rv, record) {
    const key = record[propertyToGroupBy]
    const objectsForKey = rv.get(key)
    if (typeof objectsForKey === 'undefined') {
      rv.set(key, [record])
    } else {
      objectsForKey.push(record)
    }
    return rv
  }, new Map())
}

export const addOrReplace = (array, objectWithId) => {
  const index = _.findIndex(array, item => item.id === objectWithId.id)

  return index > -1 ? [...array.slice(0, index), objectWithId, ...array.slice(index + 1)] : [...array, objectWithId]
}
