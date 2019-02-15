import React from 'react';
import Band from '../components/Band';
import List from '../containers/List';
import {
  SubTitle,
  StaticWrapper,
  ScrollWrapper,
  LogoutButton,
  CustomButton,
  ButtonText,
  Space
} from '../styles.js';

export default class Lists extends React.Component {
  render() {
    return (
      <StaticWrapper>
        <Band />
        <SubTitle>My Lists</SubTitle>
        <CustomButton color="#09c" onPress={this.props.createList}>
          <ButtonText>New</ButtonText>
        </CustomButton>
        <ScrollWrapper>
          {this.props.lists && Object.keys(this.props.lists).map((pushKey, index) =>
            <List key={index} {...this.props.lists[pushKey]} pushKey={pushKey} index={Object.keys(this.props.lists).length - index - 1} />).reverse()
          }
        </ScrollWrapper>
        <LogoutButton onPress={this.props.logout}>
          <ButtonText>Logout</ButtonText>
        </LogoutButton>
      </StaticWrapper>
    );
  }
}
