import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {text} from 'forms/Fields'
import {Button} from 'react-toolbox'
import {browserHistory} from 'react-router'
import classes from './BalanceCreationForm.scss'
import {objectToQueryParams} from 'modules/http'


const BalanceCreationForm = (props) => {
  const {
      handleSubmit,
      pristine,
      submitting
    } = props

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <Field name='date' label='Date' component={text} />
        <Field name='description' label='Description' component={text} />
        <Button type='submit' disabled={pristine || submitting} className={classes.button}>Create</Button>
      </form>
    </div>
  )
}

const validate = (values) => {
  const errors = {}
  return errors
}

const onSubmit = (values) => {
  browserHistory.push({
  pathname:  '/balances/request',
    search: `${objectToQueryParams(values)}`
  })
}

const mapDispatchToProps = {
  onSubmit
}

const mapStateToProps = (state) => {
  return {}
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'BalanceCreationForm',
    validate
  }))(BalanceCreationForm)
