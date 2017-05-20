import {connect} from 'react-redux'
import {actions} from '../modules/ledger'
import Ledger from '../components/Ledger'
import {getEntities} from 'modules/entities'


const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => {
  return state.ledger

}

export default connect(mapStateToProps, mapDispatchToProps)(Ledger)
