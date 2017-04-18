import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {amount, autocomplete, debitCredit, nameCodeArrayToObject} from './Fields'
import {Button, FontIcon} from 'react-toolbox'
import {getEntities} from 'modules/entities'
import {getAutocomplete} from 'modules/autocomplete'
import {create} from 'modules/entities/journalEntries'
import classes from './JournalEntryForm.scss'
import {fetch as fetchLedgers} from 'modules/entities/ledgers'

const validate = (values) => {
  const errors = {};
  return errors;
}

const renderRecords = ({fields, meta: {touched, error, submitFailed}, ledgers, financialFactId}) => (
  <div>
    <div>
      <Button onClick={() => fields.push({})}> <FontIcon value='add' /></Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </div>
    <div className={classes.recordsList}>
      {fields.map((record, index) =>
        <div key={index}>
          <Button
            onClick={() => fields.remove(index)}> <FontIcon value='remove' /></Button>
          <div className={classes.journalEntryField}>
            <Field name={`${record}.ledger`}
                   component={autocomplete}
                   label="Ledger"
                   source={ledgers}
                   multiple={false}
            />
          </div>
          <div className={classes.journalEntryField}>
            <Field
              name={`${record}.debitCredit`}
              component={debitCredit}
              label="Debit/credit" />
          </div>
          <div className={classes.journalEntryField}>
            <Field
              name={`${record}.amount`}
              component={amount}
              label="Amount" />
          </div>
        </div>
      )}
    </div>
  </div>
)

const JournalEntryForm = (props) => {
  const {ledgers, handleSubmit, submitting, reset} = props
  return (
    <div className={classes.journalEntryForm}>
      <form onSubmit={handleSubmit}>
        <FieldArray name='records' component={renderRecords} ledgers={ledgers} />
        <Button type="submit" disabled={submitting}>Submit</Button>
        <Button type="button" disabled={submitting} onClick={reset}>Clear</Button>
      </form>
    </div>
  )
}


const onSubmit = (values) => {
  return create({
    values: {
      ...values
    }
  })
}

const mapDispatchToProps = {
  onSubmit,
  fetchLedgers
}

const mapStateToProps = (state) => {
  return {
    ledgers: getAutocomplete(state, 'ledgers')
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'JournalEntryForm',
    validate
  }))(JournalEntryForm)
