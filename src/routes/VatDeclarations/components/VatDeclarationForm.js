import React from 'react'
import {Field} from 'redux-form'
import {Button} from 'react-toolbox'
import classes from './VatDeclarationForm.scss'
import {dropdown} from 'forms/Fields'
import lodash from 'lodash'


const VatDeclarationForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props

  return (
    <div className={classes.form}>
      <form >
        <div className={classes.field}>
          <Field name='year' label='Year' component={dropdown} source={lodash.range(2015, 2101)} />
        </div>
        <div className={classes.field}>
          <Field name='quarter' label='Quarter' component={dropdown} source={lodash.range(1, 5)} />
        </div>
        <Button onClick={handleSubmit(values =>
          props.onSubmit({
            ...values,
            action: 'show'
          }))} type='submit' disabled={pristine || submitting} className={classes.button}>Show</Button>
        <Button onClick={handleSubmit(values =>
          props.onSubmit({
            ...values,
            action: 'save'
          }))} type='submit' disabled={pristine || submitting} className={classes.button}>Create</Button>
      </form>
    </div>
  )
}

export default VatDeclarationForm

