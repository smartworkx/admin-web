import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'profit-and-loss-statements/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./containers/PalStatementDetailsContainer').default
      const reducer = require('./modules/palStatementDetails').default
      injectReducer(store, { key: 'palStatementDetails', reducer })
      cb(null, container)
    }, 'palStatementDetails')
  }
})
