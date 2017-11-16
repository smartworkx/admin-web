import React from 'react'
import {Table, TableCell, TableHead, TableRow} from 'react-toolbox'

const VatDeclarationTable = (props) => {
  const {data} = props
  return <Table selectable={false}>
    <TableHead>
      <TableCell>Period</TableCell>
      <TableCell>Creation date</TableCell>
      <TableCell>Turnover</TableCell>
      <TableCell>Vat serviced</TableCell>
      <TableCell>Vat deducted</TableCell>
      <TableCell>Number of journal entries</TableCell>
    </TableHead>
    {data.map(item => {
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
}

export default VatDeclarationTable
