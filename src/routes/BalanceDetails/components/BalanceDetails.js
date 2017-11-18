import React, {Component} from 'react'
import {Button, Table, TableCell, TableRow} from 'react-toolbox'

class BalanceDetails extends Component {

  constructor(props) {
    super(props)
    props.init()
  }

  render() {
    const {details, lines, isPersisted, save} = this.props
    let content = null
    if (details) {
      const saveButton = isPersisted ? null : <Button onClick={save}>Save</Button>
      content = <span>
        <div>{details.date}</div>
        <div>{details.description}</div>
        {saveButton}
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
      {content || <div>Loading details</div>}
    </div>
  }
}

export default BalanceDetails
