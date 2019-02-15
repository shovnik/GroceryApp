import React from 'react';
import Band from '../components/Band';
import Lists from '../containers/Lists';
import {
  StaticWrapper,
  SubTitle,
  LogoutButton,
  CustomButton,
  ButtonText
} from '../styles.js';

export default class ListsPage extends React.Component {
  render() {
    return (
      <StaticWrapper>
        <Band />
        <SubTitle>My Lists</SubTitle>
        <CustomButton color="#09c" onPress={this.props.createList}>
          <ButtonText>New</ButtonText>
        </CustomButton>
        <Lists />
        <LogoutButton onPress={this.props.logout}>
          <ButtonText>Logout</ButtonText>
        </LogoutButton>
      </StaticWrapper>
    );
  }
}
