import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import Home from './containers/Home';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
