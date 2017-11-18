import React, {Component} from 'react'
import {Table, TableCell, TableHead, TableRow} from 'react-toolbox'

import JournalSearchCriteriaForm from '../containers/JournalSearchFormContainer'

class Journal extends Component {

  constructor (props) {
    super(props)
    const { initSearch, fetchLedgers } = props
    fetchLedgers()
    initSearch()
  }

  render () {
    const { searchFormProps, sortProps, paginationProps, searchTableProps } = this.props
    return <div>
      <h1>Journal</h1>
      <JournalSearchCriteriaForm {...searchFormProps} />
      <Table selectable={false}>
        <TableHead>
          <TableCell>Value date</TableCell>
          <TableCell>Ledger</TableCell>
          <TableCell>Debit</TableCell>
          <TableCell>Credit</TableCell>
        </TableHead>
        {searchTableProps.data.map(item => {
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
