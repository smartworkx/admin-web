import {connect} from 'react-redux'
import {actions} from '../modules/financialFacts'
import FinancialFacts from '../components/FinancialFacts'
import {getEntities} from 'modules/entities'
import {fetchInboxFinancialFacts} from 'modules/entities/inboxFinancialFacts'
import {fetchLedgers} from 'modules/entities/ledgers'
import {fetchJournalEntryProposals} from 'modules/entities/inboxFinancialFacts'

const mapDispatchToProps = {
  ...actions,
  fetchInboxFinancialFacts,
  fetchLedgers,
  fetchJournalEntryProposals
}

const mapStateToProps = (state) => {
  return {
    data: getEntities(state, 'inboxFinancialFacts'),
    ledgers: getEntities(state, 'ledgers')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialFacts)
