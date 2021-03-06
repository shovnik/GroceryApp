import React from 'react';
import Login from '../containers/Login';
import ListsPage from '../containers/ListsPage';
import Editor from '../containers/Editor';
import { View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View keyboardShouldPersistTaps={'handled'}>
        {!this.props.loggedIn ? <Login /> : this.props.editActive ? <Editor /> : <ListsPage />}
      </View>
    );
  }
}
