import React from 'react'
import { Table, TableCell, TableRow } from 'react-toolbox'

const PalStatementDetails = (props) => {
  const { details, lines } = props

  return <div>
    <h1>Profit and loss statement</h1>
    <div>{details.startDate}</div>
    <div>{details.endDate}</div>
    <div>{details.description}</div>
    <Table selectable={false}>
      {lines.map(line => {
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

export default PalStatementDetails
