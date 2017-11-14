export const INIT_SORT = '@@sort/INIT_SORT'
export const convertToSearchParameters = (sort) => {
  const sortParameters = []
  if (sort && sort.length > 0) {
    sort.forEach((s) => {
      sortParameters.push({name: 'sort', value: s.property + ',' + s.direction})
    })
  }
  return sortParameters
}

const createSortReducer = ({types}) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }

  const successType = types[1]

  return (state = [], action = {}) => {
    switch (action.type) {
      case successType:
        return action.sort
      case INIT_SORT:
        return action.sort
      default:
        return state
    }
  }
}

const createSortModule = (params) => {
  const sortReducer = createSortReducer(params)
  return {
    sortReducer,
    sortInitialState: (params) => sortReducer(undefined, {type: INIT_SORT, sort: params ? params.sort : []})
  }
}

export default createSortModule
