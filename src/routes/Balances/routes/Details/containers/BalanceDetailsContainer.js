import {connect} from 'react-redux'
import {actions} from '../modules/balanceDetails'
import {getEntity} from 'modules/entities'
import BalanceDetails from '../components/BalanceDetails'

const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state, ownProps) => {
  const routeState = state.balanceDetails
  return {
    details: routeState.details || getEntity(state, 'balanceDetails', ownProps.routeParams.id),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceDetails)
