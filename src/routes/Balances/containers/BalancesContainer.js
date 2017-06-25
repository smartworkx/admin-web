import { connect } from 'react-redux'
import { actions } from '../modules/balances'
import { fetch } from 'modules/entities/balances'
import Balances from '../components/Balances'
import { getEntities } from 'modules/entities'

const mapDispatchToProps = {
  ...actions,
  fetch
}

const mapStateToProps = (state) => {
  return {
    data: getEntities(state, 'balances')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balances)
