import React, { Component } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { initSecurity } from 'modules/security'

class AppContainer extends Component

{

  shouldComponentUpdate () {
    return false
  }

  componentWillMount() {
    //initSecurity()
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
