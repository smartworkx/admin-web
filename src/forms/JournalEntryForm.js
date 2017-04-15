import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {amount, autocomplete, debitCredit, nameCodeArrayToObject} from './Fields'
import {Button} from 'react-toolbox'
import {getEntities} from 'modules/entities'
import {getAutocomplete} from 'modules/autocomplete'
import {create} from 'modules/entities/journalEntries'
import classes from './JournalEntryForm.scss'
import {fetch as fetchLedgers} from 'modules/entities/ledgers'

const validate = (values) => {
  const errors = {};
  return errors;
}

const renderRecords = ({fields, meta: {touched, error, submitFailed},ledgers}) => (
  <ul>
    <li>
      <Button onClick={() => fields.push({})}>Add Record</Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((record, index) =>
      <li key={index}>
        <Button
          onClick={() => fields.remove(index)} >Remove</Button>
        <h4>Record #{index + 1}</h4>
        <Field
          name={`${record}.ledger`}
          component={autocomplete}
          label="Ledger"
          source={ledgers}
          multiple={false}
        />
        <Field
          name={`${record}.debitCredit`}
          component={debitCredit}
          label="Debit/credit" />
        <Field
          name={`${record}.amount`}
          component={amount}
          label="Amount" />
      </li>
    )}
  </ul>
)

export class JournalEntryForm extends Component {
  constructor(props) {
    super(props)
    const {fetchLedgers} = props
    fetchLedgers()
  }

  render() {
    const {ledgers, handleSubmit, submitting, reset} = this.props
    return (
      <div className={classes.journalEntryForm}>
        <form onSubmit={handleSubmit}>
          <FieldArray name='records' component={renderRecords} ledgers={ledgers} />
          <Button type="submit" disabled={submitting}>Submit</Button>
          <Button type="button" disabled={submitting} onClick={reset}>Clear Values</Button>
        </form>
      </div>
    )
  }
}

const JournalEntryReduxForm = reduxForm({
  form: 'JournalEntryForm',
  validate
})(JournalEntryForm);

const onSubmit = (values) => {
  return create({
    values: {
      ...values,
      financialFactId: 50
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

export default connect(mapStateToProps, mapDispatchToProps)(JournalEntryReduxForm)
