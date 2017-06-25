import { connect } from 'react-redux'
import { actions } from '../modules/journal'
import Journal from '../components/Journal'

const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => {
  return state.journal
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
