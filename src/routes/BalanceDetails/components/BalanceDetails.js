import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'

class BalanceDetails extends Component {

  constructor(props) {
    super(props)
    if (props.id) {
      props.fetchOne(props.id)
    }
  }

  render() {
    const {details, lines} = this.props
    let content = null
    if (details) {
      content = <span>
      <div>{details.date}</div>
      <div>{details.description}</div>
      <Table selectable={false}>
        {lines.map(line => {
          const name = line.type === 'HEADING' ? <b>{line.name}</b> : line.name
          return <TableRow key={line.name}>
            <TableCell>{name}</TableCell>
            <TableCell>{line.debitAmount}</TableCell>
            <TableCell>{line.creditAmount}</TableCell>
          </TableRow>
        })}
        )}
        </Table>
      </span>
    }
    return <div>
      <h1>Balance</h1>
      {content ? content : <div>Loading details</div>}
    </div>
  }
}

export default BalanceDetails
