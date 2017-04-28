import {connect} from 'react-redux'
import {actions} from '../modules/vatDeclarations'
import {fetch} from 'modules/entities/vatDeclarations'
import VatDeclarations from '../components/VatDeclarations'
import {getEntities} from 'modules/entities'

const mapDispatchToProps = {
  ...actions,
  fetch
}

const mapStateToProps = (state) => {
  return {
    data: getEntities(state, 'vatDeclarations'),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VatDeclarations)
