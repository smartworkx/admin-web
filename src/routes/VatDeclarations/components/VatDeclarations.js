import React, {Component} from 'react'
import {Table, TableCell, TableHead, TableRow} from 'react-toolbox'
import VatDeclarationForm from 'forms/VatDeclarationForm'

class VatDeclarations extends Component {

  constructor (props) {
    super(props)
    const { fetch } = props
    fetch()
  }

  render () {
    return <div>
      <h1>Value added tax declarations</h1>
      <VatDeclarationForm />
      <Table selectable={false}>
        <TableHead>
          <TableCell>Period</TableCell>
          <TableCell>Creation date</TableCell>
          <TableCell>Turnover</TableCell>
          <TableCell>Vat serviced</TableCell>
          <TableCell>Vat deducted</TableCell>
          <TableCell>Number of journal entries</TableCell>
        </TableHead>
        {this.props.data.map(item => {
          return (
            <TableRow
              key={item.id}
            >
              <TableCell>{item.period.year + ' - ' + item.period.quarter}</TableCell>
              <TableCell>{item.creationDateTime}</TableCell>
              <TableCell>{item.turnoverHigh ? item.turnoverHigh.value : ''}</TableCell>
              <TableCell>{item.vatServicedAmount.value}</TableCell>
              <TableCell>{item.vatDeductedAmount.value}</TableCell>
              <TableCell>{item.journalEntries.length}</TableCell>
            </TableRow>
          )
        })}
      </Table>
    </div>
  }
}

export default VatDeclarations
