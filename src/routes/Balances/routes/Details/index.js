import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path : 'balances/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./containers/BalanceDetailsContainer').default
      const reducer = require('./modules/balanceDetails').default
      injectReducer(store, { key: 'balanceDetails', reducer })
      cb(null, container)
    }, 'balanceDetails')
  }
})
