import moment from 'moment'

const backendDatePattern = 'YYYY-MM-DD'

export const userDatePattern = 'DD/MM/YYYY'

export const userTimePattern = 'HH:mm:ss'

export const removeTime = (value) => {
  return moment(value).format(backendDatePattern)
}

