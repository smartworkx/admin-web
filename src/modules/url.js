const makeUrlWithLocationHostName = (url) => {
  const apiUrlPart = '/api/'
  return location.protocol + '//' + location.hostname + ':' + location.port + apiUrlPart + url.split(apiUrlPart)[1]
}

export const createSelfUrl = (resource) => {
  const selfHref = resource._links.self.href
  let useLocation
  if (__DEV__ || __TEST__) {
    useLocation = true
  } else {
    useLocation = false
  }
  const url = useLocation ? makeUrlWithLocationHostName(selfHref) : selfHref
  const id = url.substr(url.lastIndexOf('/') + 1)
  return {
    url,
    id
  }
}

export const objectToQuery = (object) => {
  const query = []
  for (const property in object) {
    const propertyValue = object[property]
    if (propertyValue !== undefined && propertyValue !== null) {
      query.push({name: property, value: propertyValue})
    }
  }
  return query
}

const getUrl = (url) => {
  return url.clientUrl || url.url || url
}
export const createClientUrl = (url, query) => {
  return '/' + getUrl(url) + queryParams(objectToQuery(query))
}

export const createClientDetailsUrl = (url, id) => {
  return '/' + (url.detailsUrl || getUrl(url)) + '/' + id
}

export const createClientDetailsUrlFromRow = (url, row) => {
  return '/' + (url.detailsUrl || getUrl(url)) + '/' + createSelfUrl(row).id
}

/**
 *
 * @param resource
 * @param query An array of parameters
 * @returns {string}
 */
export const createUrl = (resource, query, adapter) => {
  let resourceName = resource.url || resource
  let adapterPath = adapter ? adapter + '/' : ''
  return '/api/' + adapterPath + resourceName + queryParams(query)
}

const queryParams = (query) => {
  if (query && query.length > 0) {
    const array = []
    query.forEach((param) => {
      array.push(encodeURIComponent(param.name) + '=' + encodeURIComponent(param.value))
    })
    return '?' + array.join('&')
  } else {
    return ''
  }
}

