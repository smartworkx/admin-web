import {connect} from 'react-redux'
import {actions} from '../modules/balanceDetails'
import BalanceDetails from '../components/BalanceDetails'
import {fetchOne, getCurrentEntity, getLines} from 'modules/entities/balanceDetails'
import {create} from 'modules/entities/balanceCreationRequests'

const mapDispatchToProps = {
  ...actions,
  fetchOne,
  create
}

const mapStateToProps = (state, ownProps) => {
  const routeState = state.balanceDetails
  const id = ownProps.routeParams.id
  return {
    ...routeState,
    details: getCurrentEntity(state),
    lines: getLines(state),
    id,
    isPersisted: id && id !== 'request'
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const save = stateProps.details ? () => dispatchProps.save({date: stateProps.details.date, description: stateProps.details.description}) : null
  return {
    ...stateProps,
    ...dispatchProps,
    save,
    init: () => {
      if (stateProps.isPersisted) {
        dispatchProps.fetchOne(stateProps.id)
      } else {
        dispatchProps.create({values: ownProps.location.query})
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BalanceDetails)
