import moment from 'moment'

const backendDatePattern = 'YYYY-MM-DD'

const backendTimePattern = 'HH:mm:ss'

const backendDateTimePattern = backendDatePattern + 'T' + backendTimePattern + 'Z'

export const userDatePattern = 'DD/MM/YYYY'

export const userTimePattern = 'HH:mm:ss'

export const userDateTimePattern = userDatePattern + ' ' + userTimePattern

export const removeTime = (value) => {
  return moment(value).format(backendDatePattern)
}

