import {connect} from 'react-redux'
import {actions, ledgerLinesSelector} from '../modules/ledger'
import Ledger from '../components/Ledger'

const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => {
  return {
    ...state.ledger,
    ledgerLines: ledgerLinesSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ledger)
