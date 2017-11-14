import {isEmptyObject} from 'modules/object'
import {createPaginationForPageNumber, createPaginationForPageSize} from 'modules/pagination'

// ------------------------------------
// Utility functions for search containers
// ------------------------------------
export const mergeSearchFormProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
    initialValues: createInitialValues({initialValues: stateProps.initialValues, ownProps})
  }
}

export const mergeSearchPageProps = (stateProps, dispatchProps, ownProps) => {
  const {search, ...specificDispatchProps} = dispatchProps
  const {formValues, sort, pagination, data, ...specificStateProps} = stateProps

  let filterCriteria = createInitialValues({initialValues: stateProps.initialValues, ownProps})
  if (formValues) {
    filterCriteria = formValues
  }

  const searchCriteria = {
    filterCriteria,
    sort,
    pagination
  }
  const initSearch = () => search({
    ...searchCriteria,
    pagination: createPaginationForPageNumber(searchCriteria.pagination, 0)
  })
  const sortHandler = (sort) => search({
    ...searchCriteria,
    sort
  })
  const searchFormHandler = (filterCriteria) => search({
    ...searchCriteria,
    filterCriteria,
    pagination: createPaginationForPageNumber(pagination, 0)
  })
  const onPageNumberChangeHandler = (pageNumber) => search({
    ...searchCriteria,
    pagination: createPaginationForPageNumber(pagination, pageNumber)
  })
  const onPageSizeChangeHandler = (pageSize) => search({
    ...searchCriteria,
    pagination: createPaginationForPageSize(pagination, pageSize)
  })
  return {
    data,
    initSearch,
    ...specificStateProps,
    ...specificDispatchProps,
    filterCriteria,
    searchFormProps: {
      onSubmit: searchFormHandler,
      location: ownProps.location
    },
    paginationProps: {
      onPageNumberChange: onPageNumberChangeHandler,
      onPageSizeChange: onPageSizeChangeHandler,
      ...pagination
    },
    sortProps: {
      onSort: sortHandler,
      sort
    },
    searchTableProps: {
      data,
    }
  }
}

export const createInitialValues = ({initialValues, ownProps}) => {
  const location = ownProps.location
  if (!location) {
    throw new Error('Location not passed to search form container did you pass the props from the search component to the search form and used ' +
      'createSearchProps?')
  }

  let values = initialValues
  const query = location.query
  if (!isEmptyObject(query)) {
    values = query
  }

  return values
}

