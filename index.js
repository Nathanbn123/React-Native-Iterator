import React, {Component} from 'react';
import {initStore} from './redux/store';
import {Provider} from 'react-redux';

import App from './App';

const store = initStore();

class NoteTaker extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default NoteTaker;
