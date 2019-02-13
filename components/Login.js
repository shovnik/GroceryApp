import React, { Component } from 'react';
import {
  LoginWrapper,
  Title,
  Label,
  Input,
  LoginButton,
  ButtonText
} from '../styles.js';

export default class Login extends Component {
  render() {
    return (
      <LoginWrapper keyboardShouldPersistTaps={'handled'}>
        <Title>Grocery Tracker</Title>
        <Label>Email</Label>
        <Input onChangeText={text => this.props.updateEmail(text)} required/>
        <Label>Password</Label>
        <Input onChangeText={text => this.props.updatePassword(text)} secureTextEntry={true} required />
        <LoginButton onPress={this.props.login} type="submit">
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <LoginButton onPress={this.props.register} type="submit">
          <ButtonText>Sign Up</ButtonText>
        </LoginButton>
      </LoginWrapper>
    );
  }
}
