import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow} from 'react-toolbox'
import JournalEntryForm from 'forms/JournalEntryForm'
import classes from './FinancialFacts.scss'

class FinancialFacts extends Component {

  constructor(props) {
    super(props)
    const {fetchInboxFinancialFacts, fetchLedgers} = props
    fetchInboxFinancialFacts()
    fetchLedgers()
  }

  render() {
    return <div>
      <h1>Financial facts</h1>
      <Table selectable={false}>
        <TableHead>
          <TableCell></TableCell>
          <TableCell>Value date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
          <TableCell>Debit credit</TableCell>
        </TableHead>
        {this.props.data.map(item => {
          let financialFact = item.financialFact
          return (
            <TableRow
              category={item}
              key={financialFact.id}
            >
              <TableCell><Button
                onClick={() => this.props.fetchJournalEntryProposals({
                  financialFactId: financialFact.id,
                  amount: financialFact.amount.value,
                  type: 'COSTS',
                  taxRate: 'HIGH'
                })}>Costs high</Button>
                <Button
                  onClick={() => this.props.fetchJournalEntryProposals({
                    financialFactId: financialFact.id,
                    amount: financialFact.amount.value,
                    type: 'COSTS',
                    taxRate: 'LOW'
                  })}>Costs low</Button>
                <Button
                  onClick={() => this.props.fetchJournalEntryProposals({
                    financialFactId: financialFact.id,
                    amount: financialFact.amount.value,
                    type: 'COSTS',
                    taxRate: 'ZERO'
                  })}>Costs zero</Button>
                <Button
                  onClick={() => this.props.fetchJournalEntryProposals({
                    financialFactId: financialFact.id,
                    amount: financialFact.amount.value,
                    type: 'PRIVATE',
                  })}>Private</Button>
              </TableCell>
              <TableCell>{financialFact.valueDate}</TableCell>
              <TableCell>{financialFact.description}</TableCell>
              <TableCell>{financialFact.amount.value}</TableCell>
              <TableCell>{financialFact.amount.currency}</TableCell>
              <TableCell>{financialFact.debitCredit}</TableCell>
              <TableCell className={classes.journalEntriesCell}><JournalEntryForm form={'journalEntryForFinancialFact' + financialFact.id}
                                                                                  initialValues={{financialFactId: financialFact.id, records: item.records}}
                                                                                  enableReinitialize={true} /></TableCell>
            </TableRow>
          )
        })}
      </Table>
    </div>
  }
}

export default FinancialFacts
