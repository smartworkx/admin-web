import {compose} from 'redux'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'

import {formActions} from '../modules/vatDeclarations'

import VatDeclarationForm from '../components/VatDeclarationForm'

const mapDispatchToProps = {
  ...formActions
}

const mapStateToProps = (state) => {
  return {}
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'VatDeclarationForm',
  }))(VatDeclarationForm)
