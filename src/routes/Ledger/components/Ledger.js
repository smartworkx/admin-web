import React from 'react'
import { Table, TableCell, TableHead, TableRow } from 'react-toolbox'

const Ledger = (props) => {
  return <div>
    <h1>Ledger</h1>
    <Table selectable={false}>
      <TableHead>
        <TableCell>Value date</TableCell>
        <TableCell>Ledger</TableCell>
        <TableCell>Debit</TableCell>
        <TableCell>Credit</TableCell>
      </TableHead>
      {props.ledgerLines.map(item => {
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

export default Ledger
