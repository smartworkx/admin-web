import {connect} from 'react-redux'
import {actions} from '../modules/palStatementDetails'
import {getEntity, getEntities} from 'modules/entities'
import PalStatementDetails from '../components/PalStatementDetails'
import {getLines} from '../modules/palStatementDetails'

const mapDispatchToProps = {
  ...actions
}


const mapStateToProps = (state, ownProps) => {
  const routeState = state.palStatementDetails
  return {
    ...routeState,
    details: routeState.details || getEntity(state, 'profitAndLossStatementDetails', ownProps.routeParams.id),
    lines: getLines(routeState, getEntities(state, 'ledgers'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PalStatementDetails)
