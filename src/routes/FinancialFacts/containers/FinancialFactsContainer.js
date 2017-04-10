import {connect} from 'react-redux'
import {actions} from '../modules/financialFacts'
import FinancialFacts from '../components/FinancialFacts'
import {getEntities} from 'modules/entities'
import {fetchFinancialFacts} from 'modules/entities/financialFacts'
import {fetchLedgers} from 'modules/entities/ledgers'

const mapDispatchToProps = {
  ...actions,
  fetchFinancialFacts,
  fetchLedgers
}

const mapStateToProps = (state) => {
  return {
    data: getEntities(state, 'financialFacts'),
    ledgers: getEntities(state, 'ledgers')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialFacts)
