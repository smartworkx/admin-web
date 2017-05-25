import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'

class BalanceDetails extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {details, balanceLines} = this.props

    return <div>
      <h1>Balance</h1>
      <div>{details.date}</div>
      <div>{details.description}</div>
      <Table selectable={false}>
        {balanceLines.map(line => {
          const name = line.type === 'HEADING' ? <b>{line.name}</b> : line.name
          return <TableRow key={line.name}>
            <TableCell>{name}</TableCell>
            <TableCell>{line.debitAmount}</TableCell>
            <TableCell>{line.creditAmount}</TableCell>
          </TableRow>
        })
        })}
      </Table>
    </div>
  }
}

export default BalanceDetails
