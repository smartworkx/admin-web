import React, {Component} from 'react'
import {Button, Table, TableCell, TableHead, TableRow, Dialog} from 'react-toolbox'
import JournalEntryForm from 'forms/JournalEntryForm'
import classes from './InboxFinancialFacts.scss'
import FinancialFactForm from 'forms/FinancialFactForm'

class InboxFinancialFacts extends Component {

  constructor(props) {
    super(props)
    const {fetchInboxFinancialFacts, fetchLedgers} = props
    fetchInboxFinancialFacts()
    fetchLedgers()
  }

  render() {
    return <div>
      <div className={classes.titleLine}>
        <h1 className={classes.pageTitle}>Inbox</h1>
        <div className={classes.buttonPanel}>
          <Button
            onClick={() => this.props.openFinancialFactDialog({})}>Create financial fact</Button>
        </div>
      </div>
      <Dialog
        active={this.props.active}
        onEscKeyDown={this.props.cancelFinancialFactCreation}
        onOverlayClick={this.handleToggle}
        title='Create financial fact'
      >
        <FinancialFactForm initialValues={this.props.financialFactProposal} />
      </Dialog>
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
              key={financialFact.id}
            >
              <TableCell>
                <Button
                  onClick={() => this.props.openFinancialFactDialog({
                    financialFact: financialFact,
                    origin: 'INCOMING_INVOICE',
                  })}>Incoming invoice</Button>
                <Button
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
                <Button
                  onClick={() => this.props.fetchJournalEntryProposals({
                    financialFactId: financialFact.id,
                    amount: financialFact.amount.value,
                    type: 'CREDIT',
                  })}>Credit</Button>
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

export default InboxFinancialFacts
