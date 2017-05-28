import {connect} from 'react-redux'
import {actions} from '../modules/palStatements'
import {fetch} from 'modules/entities/palStatements'
import PalStatements from '../components/PalStatements'
import {getEntities} from 'modules/entities'

const mapDispatchToProps = {
  ...actions,
  fetch
}

const mapStateToProps = (state) => {
  return {
    data: getEntities(state, 'palStatements'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PalStatements)
