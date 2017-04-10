import React, {Component} from 'react'
import {Button,Table, TableHead,TableCell,TableRow} from 'react-toolbox'

class FinancialFacts extends Component {

  constructor(props) {
    super(props)
    const {fetchFinancialFacts, fetchLedgers} = props
    fetchFinancialFacts()
    fetchLedgers()
  }

  render() {
    return <div>
      <h1>Financial facts</h1>
      <Table selectable={false} >
        <TableHead>
          <TableCell>Value date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
          <TableCell>Debit credit</TableCell>
        </TableHead>
        {this.props.data.map(item => (
          <TableRow
            category={item}
            key={item._id}
          >
            <TableCell>{item.valueDate}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.amount.value}</TableCell>
            <TableCell>{item.amount.currency}</TableCell>
            <TableCell>{item.debitCredit}</TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  }
}

export default FinancialFacts
