import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-toolbox'
import {browserHistory} from 'react-router'
import {getEntities} from 'modules/entities'
import classes from './PalStatementCreationForm.scss'
import {date, text} from '../../../forms/Fields'
import {create, SUCCESS_CREATE} from 'modules/entities/palStatementCreationRequestedEvents'
import {fetchLedgers} from 'modules/entities/ledgers'

export class PalStatementCreationForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <Field name='startDate' label='Start date' component={text} />
          <Field name='endDate' label='End date' component={text} />
          <Field name='description' label='Description' component={text} />
          <Button type="submit" disabled={pristine || submitting} className={classes.button}>Create</Button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  return errors;
}

const onSubmit = (values) => {
  return (dispatch) => {
    return dispatch(create({
      values,
    })).then(action => {
      if (action.type === SUCCESS_CREATE) {
        dispatch(fetchLedgers())
        browserHistory.push('/profit-and-loss-statements/request')
      }
    })
  }
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
    form: 'PalStatementCreationForm',
    validate
  }))(PalStatementCreationForm)
