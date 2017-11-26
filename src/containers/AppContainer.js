import React, { Component } from 'react'
import { browserHistory, Router } from 'react-router'
import { connect, Provider } from 'react-redux'
import { initSecurity } from 'modules/security'


class AppContainer extends Component{

  componentWillMount() {
    const {store} = this.props
    store.dispatch(initSecurity())
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          {this.props.securityIsInited ? <Router history={browserHistory} children={routes} /> : null}
        </div>
      </Provider>
    )
  }
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  securityIsInited: state.security.token !== undefined
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
