import React from 'react'
import { Autocomplete, DatePicker, Dropdown, Input } from 'react-toolbox'

export const text = ({ input, label }) => (<Input label={label} {...input} />)

export const amount = ({ input, label }) => (<Input label={label} {...input} type='number' />)

export const date = ({ input, label }) => (<DatePicker label={label} {...input} />)

export const dropdown = ({ input, label, source }) => {
  if (!source[0].label) {
    source = source.map((item) => {
      return { label: item, value: item }
    })
  }
  return (<Dropdown label={label} {...input} source={source} />)
}

export const debitCredit = ({ input, label }) => (
  <Dropdown label={label} {...input} source={[{ label: 'Credit', value: 'CREDIT' }, { label: 'Debit', value: 'DEBIT' }]} />
)

export const autocomplete = ({ input, label, source, multiple }) => {
  const onChange = (value) => {
    return input.onChange(value)
  }
  return (
    <Autocomplete label={label} {...input} source={source} direction='down' multiple={multiple} onChange={onChange} />)
}

export const nameArrayToObject = (data) => {
  return data.reduce((acc, cur) => {
    acc[cur.name] = cur.name
    return acc
  }, {})
}

