export const INIT_PAGINATION = '@@pagination/INIT_PAGINATION'

export const paginationInitialState = {
  isFetching: false,
  pageSize: 25,
  pageNumber: 0,
  firsPageUrl: undefined,
  lastPageUrl: undefined,
  totalPages: 0,
  totalElements: 0,
  ids: []
}

/**
 * Extracts the search criteria for searching from the pagination state.
 */
export const extractSearchCriteria = (paginationState) => {
  return {
    page: paginationState.pageNumber,
    size: paginationState.pageSize
  }
}

export const createPaginationForPageNumber = (pagination, pageNumber) => {
  return {
    ...pagination,
    pageNumber: pageNumber
  }
}

export const createPaginationForPageSize = (pagination, pageSize) => {
  return {
    ...pagination,
    pageSize: pageSize,
    pageNumber: 0
  }
}

/**
 * Creates a pagination reducer.
 *
 * @param types Of the search it can listen on.
 * @returns {function(*=, *=)} The reducer function.
 */
const createPaginationReducer = ({types}) => {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }

  const [requestType, successType, failureType] = types

  function successReducer (state, action) {
    const page = action.json.page
    let pageNumber = page.number
    if (page.totalElements / page.size < pageNumber) {
      pageNumber = page.totalPages
    }
    return {
      ...state,
      isFetching: false,
      pageNumber: pageNumber,
      pageSize: page.size,
      totalPages: page.totalPages,
      totalElements: page.totalElements
    }
  }

  return (state = paginationInitialState, action) => {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          isFetching: true
        }
      case successType:
        return successReducer(state, action)
      case failureType:
        return {
          ...state,
          isFetching: false
        }
      default:
        return state
    }
  }
}

const createPaginationModule = (params) => {
  const paginationReducer = createPaginationReducer(params)
  return {
    paginationReducer,
    paginationInitialState: () => paginationReducer(undefined, {type: INIT_PAGINATION})
  }
}

export default createPaginationModule
