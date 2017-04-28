import {connect} from 'react-redux'
import {actions} from '../modules/financialFacts'
import FinancialFacts from '../components/FinancialFacts'
import {getEntities} from 'modules/entities'

const mapDispatchToProps = {
  ...actions,
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialFacts)
