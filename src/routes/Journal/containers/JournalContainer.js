import {connect} from 'react-redux'
import {actions, data} from '../modules/journal'
import Journal from '../components/Journal'
import {mergeSearchPageProps} from 'modules/search'
import {search} from 'modules/entities/journalEntries'
import {fetchLedgers} from 'modules/entities/ledgers'

const mapDispatchToProps = {
  ...actions,
  search,
  fetchLedgers
}

const mapStateToProps = (state) => {
  return {data: data(state)}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeSearchPageProps)(Journal)
