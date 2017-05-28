import React from 'react'
import {getLines} from 'routes/PalStatementDetails/modules/palStatementDetails'
import {SUCCESS_CREATE} from 'modules/entities/palStatementCreationRequestedEvents'


describe('pal statement details route module', () => {

  beforeEach(() => {
  })

  it.only('Creates lines', () => {
    const lines = getLines({details: creationRequestResponse}, testUtils.ledgers)
    expect(lines).to.have.lengthOf(9)

  })
})

const creationRequestResponse =
{
  "creationDateTime" : null,
  "description" : "",
  "period" : {
  "start" : "2017-01-01",
    "end" : "2017-03-31"
},
  "headings" : [ {
  "name" : "TURNOVER",
  "records" : [ {
    "ledgerId" : 7,
    "debitCredit" : "CREDIT",
    "amount" : {
      "value" : 13212.5,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 7,
    "debitCredit" : "CREDIT",
    "amount" : {
      "value" : 11287.5,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 7,
    "debitCredit" : "CREDIT",
    "amount" : {
      "value" : 2307,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 7,
    "debitCredit" : "CREDIT",
    "amount" : {
      "value" : 13475,
      "currency" : "EUR"
    }
  } ],
  "amount" : {
    "value" : 40282,
    "currency" : "EUR"
  }
}, {
  "name" : "INTEREST",
  "records" : [ ],
  "amount" : {
    "value" : 0,
    "currency" : "EUR"
  }
}, {
  "name" : "OTHER_COSTS",
  "records" : [ {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 7.49,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 62.85,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 722.95,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 27.12,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 39.95,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 121.01,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 8.63,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 4.15,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 16.82,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 60.88,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 24.99,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 55.04,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 5,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 7.14,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 17.5,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 10,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 182.65,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 11,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 47.17,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 11,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 47.17,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 12,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 37.5,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 12,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 35.03,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 12,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 1.8E+2,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 13,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 15.7,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 13,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 19.83,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 13,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 15.74,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 14,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 72.93,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 14,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 2.4E+2,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 14,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 1798,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 14,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 20.29,
      "currency" : "EUR"
    }
  }, {
    "ledgerId" : 14,
    "debitCredit" : "DEBIT",
    "amount" : {
      "value" : 451.61,
      "currency" : "EUR"
    }
  } ],
  "amount" : {
    "value" : 4345.14,
    "currency" : "EUR"
  }
} ],
  "profit" : {
  "value" : 35936.86,
    "currency" : "EUR"
}
}
