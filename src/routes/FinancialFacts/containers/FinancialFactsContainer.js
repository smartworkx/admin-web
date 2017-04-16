import {connect} from 'react-redux'
import {actions} from '../modules/financialFacts'
import FinancialFacts from '../components/FinancialFacts'
import {getEntities} from 'modules/entities'
import {fetch as fetchInboxFinancialFacts} from 'modules/entities/inboxFinancialFacts'
import {fetch as fetchLedgers} from 'modules/entities/ledgers'

const mapDispatchToProps = {
  ...actions,
  fetchInboxFinancialFacts,
  fetchLedgers
}

const mapStateToProps = (state) => {
  return {
    data: getEntities(state, 'inboxFinancialFacts'),
    ledgers: getEntities(state, 'ledgers')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialFacts)
