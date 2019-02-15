import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {
  LoginWrapper,
  Title,
  Label,
  Input,
  Gap,
  SubmitButton,
  ButtonText
} from '../styles.js';

export default class Login extends Component {
  render() {
    return (
      <LoginWrapper keyboardShouldPersistTaps={'handled'}>
        <Title>Easy Groceries</Title>
        <Label>Email</Label>
        <Input onChangeText={text => this.props.updateEmail(text)} required/><Gap />
        <Label>Password</Label>
        <Input onChangeText={text => this.props.updatePassword(text)} secureTextEntry={true} required /><Gap />
        <SubmitButton onPress={this.props.login} type="submit">
          <ButtonText>Login</ButtonText>
        </SubmitButton>
        <SubmitButton onPress={this.props.register} type="submit">
          <ButtonText>Sign Up</ButtonText>
        </SubmitButton>
      </LoginWrapper>
    );
  }
}
