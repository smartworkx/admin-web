import {connect} from 'react-redux'
import {actions} from '../modules/journal'
import Journal from '../components/Journal'
import {getEntities} from 'modules/entities'


const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => {
  return state.journal

}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
