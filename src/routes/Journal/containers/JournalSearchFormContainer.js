import {reduxForm} from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'
import SearchForm from '../components/JournalSearchForm'
import {mergeSearchFormProps} from 'modules/search'
import {getAutocomplete} from 'modules/autocomplete'

const mapDispatchToProps = {}

const mapStateToProps = (state) => {
  return {
    ledgers: getAutocomplete(state, 'ledgers')
  }

}

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeSearchFormProps),
  reduxForm({
    form: 'JournalSearchForm'
  })
)(SearchForm)
