import React, { Component } from 'react'
import { Table, TableCell, TableHead, TableRow } from 'react-toolbox'

class Journal extends Component {

  constructor (props) {
    super(props)
    const { createJournal } = props
    createJournal()
  }

  render () {
    return <div>
      <h1>Journal</h1>
      <Table selectable={false}>
        <TableHead>
          <TableCell>Value date</TableCell>
          <TableCell>Ledger</TableCell>
          <TableCell>Debit</TableCell>
          <TableCell>Credit</TableCell>
        </TableHead>
        {this.props.journalLines.map(item => {
          return (
            <TableRow
              key={item.id}
            >
              <TableCell>{item.valueDate}</TableCell>
              <TableCell>{item.ledger}</TableCell>
              <TableCell>{item.debitAmount}</TableCell>
              <TableCell>{item.creditAmount}</TableCell>
            </TableRow>
          )
        })}
      </Table>
    </div>
  }
}

export default Journal
