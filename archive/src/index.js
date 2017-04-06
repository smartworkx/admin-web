import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import WidgetsLess from 'react-widgets/lib/less/react-widgets.less';

const store = configureStore();

render(
  <AppContainer
    component={Root}
    props={{ store }}
  />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(
      <AppContainer
        component={require('./containers/Root').default}
        props={{ store }}
      />,
      document.getElementById('root')
    );
  });
}
