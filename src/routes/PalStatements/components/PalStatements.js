import React, { Component } from 'react'
import { Table, TableCell, TableHead, TableRow } from 'react-toolbox'
import CreationForm from './PalStatementCreationForm'

class PalStatements extends Component {

  constructor (props) {
    super(props)
    const { fetch } = props
    fetch()
  }

  render () {
    return <div>
      <h1>Profit and loss statements</h1>
      <CreationForm />
      <Table selectable={false}>
        <TableHead>
          <TableCell>Date</TableCell>
          <TableCell>Creation date</TableCell>
          <TableCell>Description</TableCell>
        </TableHead>
        {this.props.data.map(item => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.creationDateTime}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          )
        })}
      </Table>
    </div>
  }
}

export default PalStatements
