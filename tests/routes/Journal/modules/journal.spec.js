import reducer, { CREATE_JOURNAL } from 'routes/Journal/modules/journal'

describe('Journal module', () => {
  beforeEach(() => {
  })

  it('Aggregates ledgers and journals', () => {
    const action = {
      type: CREATE_JOURNAL,
      ledgers: [ {
        id : 3,
        code : 'DVAT',
        name : 'Te vorderen BTW',
        balanceHeading : 'CLAIMS',
        _links : {
          self : {
            href : 'http://localhost:8080/ledgers/3'
          },
          ledger : {
            href : 'http://localhost:8080/ledgers/3'
          }
        }
      }, {
        id : 4,
        code : 'CRED',
        name : 'Crediteuren',
        balanceHeading : 'SHORT_RUNNING_DEBT',
        _links : {
          self : {
            href : 'http://localhost:8080/ledgers/4'
          },
          ledger : {
            href : 'http://localhost:8080/ledgers/4'
          }
        }
      }, {
        id : 5,
        code : 'BANK',
        name : 'Bank',
        balanceHeading : 'LIQUID_ASSETS',
        _links : {
          self : {
            href : 'http://localhost:8080/ledgers/5'
          },
          ledger : {
            href : 'http://localhost:8080/ledgers/5'
          }
        }
      }, {
        id : 10,
        code : 'ITC',
        name : 'IT kosten',
        balanceHeading : null,
        _links : {
          self : {
            href : 'http://localhost:8080/ledgers/10'
          },
          ledger : {
            href : 'http://localhost:8080/ledgers/10'
          }
        }
      }],
      journalEntries: [{
        id: 50,
        creationDateTime: '2017-04-28T17:01:35.116',
        bookDate: '2017-04-28',
        valueDate: '2017-01-01',
        financialFactId: 89,
        records: [{
          ledgerId: 10,
          debitCredit: 'DEBIT',
          amount: {
            value: 24.99,
            currency: 'EUR'
          }
        }, {
          ledgerId: 4,
          debitCredit: 'CREDIT',
          amount: {
            value: 30.24,
            currency: 'EUR'
          }
        }, {
          ledgerId: 3,
          debitCredit: 'DEBIT',
          amount: {
            value: 5.25,
            currency: 'EUR'
          }
        }]
      }]
    }
    const newState = reducer({}, action)
    expect(newState.journalLines[0].ledger).to.equal('IT kosten')
  })
})
