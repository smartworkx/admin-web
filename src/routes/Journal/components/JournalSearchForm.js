import React from 'react'
import {Field} from 'redux-form'
import {autocomplete, text} from 'forms/Fields'
import {Button} from 'react-toolbox'
import 'babel-core/register'
import 'babel-polyfill'

import classes from './JournalSearchForm.scss'

const JournalSearchCriteriaForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    ledgers
  } = props

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formRow}>
          <div className={classes.formField}>
            <Field name='startDate' label='Start date' className={classes.field} component={text} />
          </div>
          <div className={classes.formField}>
            <Field name='endDate' label='End date' component={text} />
          </div>
          <div className={classes.formField}>
            <Field name={`ledgers`}
                   component={autocomplete}
                   label='Ledger'
                   source={ledgers}
                   multiple={false}
            />
          </div>
        </div>
        <Button type='submit' disabled={submitting} className={classes.button}>Search</Button>
      </form>
    </div>
  )
}

export default JournalSearchCriteriaForm
