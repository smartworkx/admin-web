import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'
import VatDeclarationForm from 'forms/VatDeclarationForm'
import classes from './VatDeclarations.scss'

class VatDeclarations extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>Value added tax declarations</h1>
      <VatDeclarationForm />
    </div>
  }
}

export default VatDeclarations
