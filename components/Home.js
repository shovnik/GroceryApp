import React from 'react';
import Login from '../containers/Login';
import Lists from '../containers/Lists';
import Editor from '../containers/Editor';
import { Wrapper } from '../styles.js';

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper keyboardShouldPersistTaps={'handled'}>
        {!this.props.loggedIn ? <Login /> : this.props.editActive ? <Editor /> : <Lists />}
      </Wrapper>
    );
  }
}
