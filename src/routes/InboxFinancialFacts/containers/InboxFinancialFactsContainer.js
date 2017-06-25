import { connect } from 'react-redux'
import { actions } from '../modules/inboxFinancialFacts'
import InboxFinancialFacts from '../components/InboxFinancialFacts'
import { getEntities } from 'modules/entities'
import { fetchInboxFinancialFacts, fetchJournalEntryProposals } from 'modules/entities/inboxFinancialFacts'
import { fetchLedgers } from 'modules/entities/ledgers'

const mapDispatchToProps = {
  ...actions,
  fetchInboxFinancialFacts,
  fetchLedgers,
  fetchJournalEntryProposals
}

const mapStateToProps = (state) => {
  return {
    ...state.inboxFinancialFacts,
    data: getEntities(state, 'inboxFinancialFacts'),
    ledgers: getEntities(state, 'ledgers')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxFinancialFacts)
