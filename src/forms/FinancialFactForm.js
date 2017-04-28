import React, {Component, PropTypes} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {amount, autocomplete, date, debitCredit, nameArrayToObject, text} from './Fields'
import {Button} from 'react-toolbox'
import {getEntities} from 'modules/entities'
import {fetch as fetchOrigins} from 'modules/entities/origins'
import {create, fetchJournalEntryProposals} from 'modules/entities/financialFacts'
import classes from './FinancialFactForm.scss'

const validate = (values) => {
  const errors = {}
  return errors
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export class FinancialFactForm extends Component {

  componentWillMount() {
    const {fetchOrigins} = this.props
    fetchOrigins()
  }

  render() {
    const {
      handleSubmit,
      reset,
      pristine,
      submitting,
      origins
    } = this.props

    return (
      <div className={classes.financialFactForm}>
        <form onSubmit={handleSubmit}>
          <Field name='valueDate' label='Value date' component={date} />
          <Field name='amount' label='Amount' component={amount} />
          <Field name='description' label='Description' component={text} />
          <Field name='origin' label='Origin' component={autocomplete} source={origins} multiple={false} />
          <Button type="submit" disabled={submitting}>Submit</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
        </form>
      </div>
    )
  }
}

const onSubmit = (values) => {
  return create({
    values
  })
}

const mapDispatchToProps = {
  fetchOrigins,
  onSubmit
}

const mapStateToProps = (state) => {
  return {
    origins: nameArrayToObject(getEntities(state, 'origins')),
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), reduxForm({
  form: 'FinancialFactForm',
  validate
}))(FinancialFactForm)
