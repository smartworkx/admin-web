import {connect} from 'react-redux'
import {actions} from '../modules/vatDeclarations'
import VatDeclarations from '../components/VatDeclarations'
import {getEntities} from 'modules/entities'

const mapDispatchToProps = {
  ...actions,

}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VatDeclarations)
