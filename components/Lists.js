import React from 'react';
import List from '../containers/List';
import {
  Wrapper,
  LogoutButton,
  CustomButton,
  ButtonText,
  Space
} from '../styles.js';

export default class Lists extends React.Component {
  render() {
    return (
      <Wrapper>
        <LogoutButton onPress={this.props.logout}>
          <ButtonText>Logout</ButtonText>
        </LogoutButton>
        <CustomButton color="#09c" onPress={this.props.createList}>
          <ButtonText>New Grocery List</ButtonText>
        </CustomButton>
        <Space />
        {this.props.lists && Object.keys(this.props.lists).map((pushKey, index) => <List key={index} {...this.props.lists[pushKey]} pushKey={pushKey} index={Object.keys(this.props.lists).length - index - 1} />).reverse()}
      </Wrapper>
    );
  }
}
