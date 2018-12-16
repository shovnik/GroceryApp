import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import Sample from './components/Sample';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Sample />
      </Provider>
    );
  }
}
