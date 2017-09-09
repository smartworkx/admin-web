import React, {Component} from 'react'
import {Table, TableCell, TableHead, TableRow} from 'react-toolbox'

class Ledger extends Component {

  constructor(props) {
    super(props)
    const {createLedger} = props
    createLedger()
  }

  render = () => {
    return <div>
      <h1>Ledger</h1>
      <Table selectable={false}>
        <TableHead>
          <TableCell>Code</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Balance</TableCell>
          <TableCell>Profit and loss</TableCell>
        </TableHead>
        {this.props.ledgerLines.map(item => {
          return (
            <TableRow
              key={item.id}
            >
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.balanceHeading}</TableCell>
              <TableCell>{item.profitAndLossHeading}</TableCell>
            </TableRow>
          )
        })}
      </Table>
    </div>
  }
}

export default Ledger
