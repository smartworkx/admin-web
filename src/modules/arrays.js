export const groupBy = (array, propertyToGroupBy) => {
  return array.reduce(function (rv, record) {
    const key = record[propertyToGroupBy]
    const objectsForKey = rv.get(key)
    if (typeof objectsForKey === 'undefined') {
      rv.set(key, [record])
    } else {
      objectsForKey.push(record)
    }
    return rv;
  }, new Map());
}
