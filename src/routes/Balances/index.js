import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'balances',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const container = require('./containers/BalancesContainer').default
      const reducer = require('./modules/balances').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'balances', reducer })

      /*  Return getComponent   */
      cb(null, container)

    /* Webpack named bundle   */
    }, 'balances')
  }
})
