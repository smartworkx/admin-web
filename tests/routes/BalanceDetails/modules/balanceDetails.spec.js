import reducer from 'routes/BalanceDetails/modules/balanceDetails'
import { SUCCESS_CREATE } from 'modules/entities/balanceCreationRequestedEvents'

describe('balance details route module', () => {
  beforeEach(() => {
  })

  it('Creates balance lines', () => {
    const action = {
      type: SUCCESS_CREATE,
      json: balanceDetailsRequestResponse
    }
    const newState = reducer({}, action)
    expect(newState.balanceLines).to.not.be.empty
  })
})

const balanceDetailsRequestResponse = {
  'balanceHeadings' : [ {
    'name' : 'CLAIMS',
    'accounts' : [ {
      'amount' : {
        'value' : 79815.55,
        'currency' : 'EUR'
      },
      'name' : 'Debiteuren'
    }, {
      'amount' : {
        'value' : 834.25,
        'currency' : 'EUR'
      },
      'name' : 'Te vorderen BTW'
    } ],
    'debitCredit' : 'DEBIT',
    'amount' : {
      'value' : 80649.8,
      'currency' : 'EUR'
    }
  }, {
    'name' : 'TANGIBLE_FIXED_ASSETS',
    'accounts' : [ ],
    'debitCredit' : 'DEBIT',
    'amount' : {
      'value' : 0,
      'currency' : 'EUR'
    }
  }, {
    'name' : 'VENTURE_CAPITAL',
    'accounts' : [ {
      'amount' : {
        'value' : 40282,
        'currency' : 'EUR'
      },
      'name' : 'Omzet Joris'
    } ],
    'debitCredit' : 'CREDIT',
    'amount' : {
      'value' : 40282,
      'currency' : 'EUR'
    }
  }, {
    'name' : 'LIQUID_ASSETS',
    'accounts' : [ {
      'amount' : {
        'value' : 72691.31,
        'currency' : 'EUR'
      },
      'name' : 'Bank'
    } ],
    'debitCredit' : 'DEBIT',
    'amount' : {
      'value' : 72691.31,
      'currency' : 'EUR'
    }
  }, {
    'name' : 'SHORT_RUNNING_DEBT',
    'accounts' : [ {
      'amount' : {
        'value' : 8459.23,
        'currency' : 'EUR'
      },
      'name' : 'Te betalen BTW'
    }, {
      'amount' : {
        'value' : 9728.72,
        'currency' : 'EUR'
      },
      'name' : 'Crediteuren'
    }, {
      'amount' : {
        'value' : 8845,
        'currency' : 'EUR'
      },
      'name' : 'Af te dragen BTW'
    } ],
    'debitCredit' : 'CREDIT',
    'amount' : {
      'value' : 27032.95,
      'currency' : 'EUR'
    }
  }, {
    'name' : 'LOAN',
    'accounts' : [ ],
    'debitCredit' : 'DEBIT',
    'amount' : {
      'value' : 0,
      'currency' : 'EUR'
    }
  } ],
  'creationDateTime' : '2017-05-25T12:46:50.273',
  'date' : '2017-05-25',
  'description' : null
}
