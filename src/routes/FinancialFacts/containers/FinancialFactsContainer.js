import { connect } from 'react-redux'
import { actions } from '../modules/financialFacts'
import FinancialFacts from '../components/FinancialFacts'

const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialFacts)
