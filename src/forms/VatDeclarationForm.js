import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-toolbox'
import {getEntities} from 'modules/entities'
import {create} from 'modules/entities/vatDeclarationCreatedEvents'
import classes from './VatDeclarationForm.scss'
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
      pristine,
      submitting,
    } = this.props;

    return (
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <div className={classes.field}>
            <Field name='year' label='Year' component={dropdown} source={lodash.range(2015, 2101)} />
          </div>
          <div className={classes.field}>
            <Field name='quarter' label='Quarter' component={dropdown} source={lodash.range(1, 5)} />
          </div>
          <Button type="submit" disabled={pristine || submitting} className={classes.button}>Create</Button>
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
  return {}
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'VatDeclarationForm',
    validate
  }))(VatDeclarationForm)
