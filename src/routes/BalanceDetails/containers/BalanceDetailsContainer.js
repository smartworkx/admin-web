import { connect } from 'react-redux'
import { actions, getLines } from '../modules/balanceDetails'
import BalanceDetails from '../components/BalanceDetails'
import { fetchOne } from 'modules/entities/balanceDetails'

const mapDispatchToProps = {
  ...actions,
  fetchOne
}

const mapStateToProps = (state, ownProps) => {
  const routeState = state.balanceDetails
  const id = ownProps.routeParams.id
  return {
    ...routeState,
    details: routeState.details,
    lines: getLines(routeState),
    id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceDetails)
