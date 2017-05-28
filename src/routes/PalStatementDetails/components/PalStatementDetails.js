import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'

class PalStatementDetails extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {details, lines} = this.props

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
}

export default PalStatementDetails
