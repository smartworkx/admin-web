import React, {Component} from 'react'
import VatDeclarationForm from '../containers/VatDeclarationFormContainer'
import VatDeclarationTable from './VatDeclarationTable'

class VatDeclarations extends Component {

  constructor(props) {
    super(props)
    const {fetch} = props
    fetch()
  }

  render() {
    const {notPeristedData} = this.props
    const notPersistedDataTable = notPeristedData ? <VatDeclarationTable data={this.props.notPersistedData} /> : null
    return <div>
      <h1>Value added tax declarations</h1>
      <VatDeclarationForm />
      {notPersistedDataTable}
      <VatDeclarationTable data={this.props.data} />
    </div>
  }
}

export default VatDeclarations
