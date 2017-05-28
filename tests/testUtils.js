const ledgers = [{
  "id": 1,
  "code": "DEB",
  "name": "Debiteuren",
  "balanceHeading": "CLAIMS",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/1"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/1"
    }
  }
}, {
  "id": 2,
  "code": "VATS",
  "name": "Te betalen BTW",
  "balanceHeading": "SHORT_RUNNING_DEBT",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/2"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/2"
    }
  }
}, {
  "id": 3,
  "code": "DVAT",
  "name": "Te vorderen BTW",
  "balanceHeading": "CLAIMS",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/3"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/3"
    }
  }
}, {
  "id": 4,
  "code": "CRED",
  "name": "Crediteuren",
  "balanceHeading": "SHORT_RUNNING_DEBT",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/4"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/4"
    }
  }
}, {
  "id": 5,
  "code": "BANK",
  "name": "Bank",
  "balanceHeading": "LIQUID_ASSETS",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/5"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/5"
    }
  }
}, {
  "id": 6,
  "code": "INV",
  "name": "Inventaris",
  "balanceHeading": "TANGIBLE_FIXED_ASSETS",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/6"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/6"
    }
  }
}, {
  "id": 16,
  "code": "LOAN",
  "name": "Lening",
  "balanceHeading": "LOAN",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/16"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/16"
    }
  }
}, {
  "id": 18,
  "code": "PRIVJ",
  "name": "Prive opname Joris",
  "balanceHeading": null,
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/18"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/18"
    }
  }
}, {
  "id": 19,
  "code": "PRIVL",
  "name": "Prive opname Leon",
  "balanceHeading": null,
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/19"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/19"
    }
  }
}, {
  "id": 20,
  "code": "VATP",
  "name": "Af te dragen BTW",
  "balanceHeading": "SHORT_RUNNING_DEBT",
  "profitAndLossHeading": null,
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/20"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/20"
    }
  }
}, {
  "id": 10,
  "code": "ITC",
  "name": "IT kosten",
  "balanceHeading": null,
  "profitAndLossHeading": "OTHER_COSTS",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/10"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/10"
    }
  }
}, {
  "id": 11,
  "code": "TRAC",
  "name": "Reiskosten",
  "balanceHeading": null,
  "profitAndLossHeading": "OTHER_COSTS",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/11"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/11"
    }
  }
}, {
  "id": 12,
  "code": "COSTS",
  "name": "Overige kosten",
  "balanceHeading": null,
  "profitAndLossHeading": "OTHER_COSTS",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/12"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/12"
    }
  }
}, {
  "id": 13,
  "code": "TELC",
  "name": "Telefoon kosten",
  "balanceHeading": null,
  "profitAndLossHeading": "OTHER_COSTS",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/13"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/13"
    }
  }
}, {
  "id": 14,
  "code": "EDUC",
  "name": "Opleiding",
  "balanceHeading": null,
  "profitAndLossHeading": "OTHER_COSTS",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/14"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/14"
    }
  }
}, {
  "id": 15,
  "code": "INSU",
  "name": "Verzekering",
  "balanceHeading": null,
  "profitAndLossHeading": "OTHER_COSTS",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/15"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/15"
    }
  }
}, {
  "id": 17,
  "code": "INT",
  "name": "Rente",
  "balanceHeading": null,
  "profitAndLossHeading": "INTEREST",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/17"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/17"
    }
  }
}, {
  "id": 7,
  "code": "TOJ",
  "name": "Omzet Joris",
  "balanceHeading": "VENTURE_CAPITAL",
  "profitAndLossHeading": "TURNOVER",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/7"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/7"
    }
  }
}, {
  "id": 8,
  "code": "TOL",
  "name": "Omzet Leon",
  "balanceHeading": "VENTURE_CAPITAL",
  "profitAndLossHeading": "TURNOVER",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/8"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/8"
    }
  }
}, {
  "id": 9,
  "code": "TOS",
  "name": "Omzet gedeeld",
  "balanceHeading": "VENTURE_CAPITAL",
  "profitAndLossHeading": "TURNOVER",
  "_links": {
    "self": {
      "href": "http://localhost:8080/ledgers/9"
    },
    "ledger": {
      "href": "http://localhost:8080/ledgers/9"
    }
  }
}]

export default {ledgers}
