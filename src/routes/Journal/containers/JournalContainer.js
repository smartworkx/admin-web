import {connect} from 'react-redux'
import {actions} from '../modules/journal'
import Journal from '../components/Journal'
import {getEntities} from 'modules/entities'
import {fetch} from 'modules/entities/journalEntries'
import {fetchLedgers} from 'modules/entities/ledgers'

const mapDispatchToProps = {
  ...actions,
  fetch,
  fetchLedgers
}

const mapStateToProps = (state) => {
  return state.journal

}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
