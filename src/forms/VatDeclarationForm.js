import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-toolbox'
import {getEntities} from 'modules/entities'
import {create, fetch} from 'modules/entities/vatDeclarations'
import classes from './FinancialFactForm.scss'
import {dropdown} from './Fields'
import lodash from 'lodash'

const validate = (values) => {
  const errors = {};
  return errors;
};

export class VatDeclarationForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      handleSubmit,
      reset,
      pristine,
      submitting,
    } = this.props;

    return (
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <Field name='year' label='Year' component={dropdown} source={lodash.range(2017,2101)}/>
          <Field name='quarter' label='Quarter' component={dropdown} source={lodash.range(1,5)}/>
          <Button type="submit" disabled={pristine || submitting}>Submit</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
        </form>
      </div>
    );
  }
}

const onSubmit = (values) => {
  return create({
    values
  })
}

const mapDispatchToProps = {
  onSubmit
}

const mapStateToProps = (state) => {
  return {
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'VatDeclarationForm',
    validate
  }))(VatDeclarationForm)
