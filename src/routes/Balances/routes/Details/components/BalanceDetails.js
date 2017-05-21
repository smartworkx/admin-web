import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'

class BalanceDetails extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {details} = this.props
    return <div>
      <h1>Balance</h1>
      {details ? details.date : 'No details'}
    </div>
  }
}

export default BalanceDetails
