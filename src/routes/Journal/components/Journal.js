import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'
import JournalEntryForm from 'forms/JournalEntryForm'
import classes from './Journal.scss'

class Journal extends Component {

  constructor(props) {
    super(props)
    const {createJournal} = props
    createJournal()
  }

  render() {
    return <div>
      <h1>Journal</h1>
      <Table selectable={false}>
        <TableHead>
          <TableCell>Value date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Debit</TableCell>
          <TableCell>Credit</TableCell>
        </TableHead>
        {this.props.entries.map(item => {
          return (
            <TableRow
              key={item.id}
            >
              <TableCell>{item.valueDate}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          )
        })}
      </Table>
    </div>
  }
}

export default Journal
