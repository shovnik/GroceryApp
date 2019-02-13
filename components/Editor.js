import React from 'react';
import NewItem from '../containers/NewItem';
import Filter from '../containers/Filter';
import Items from '../containers/Items';
import Cost from '../containers/Cost';
import {
  Wrapper,
  Title,
  CustomButton,
  ButtonText
} from '../styles.js';

export default class Editor extends React.Component {
  render() {
    return (
      <Wrapper keyboardShouldPersistTaps={'handled'}>
        <Title>{`List of ${this.props.date}`}</Title>
        <Filter></Filter>
        <NewItem></NewItem>
        <Items></Items>
        <Cost></Cost>
        <CustomButton color="#09c" onPress={this.props.saveList}>
          <ButtonText>Save</ButtonText>
        </CustomButton>
        <CustomButton color="#f44" onPress={this.props.cancelList}>
          <ButtonText>Cancel</ButtonText>
        </CustomButton>
      </Wrapper>
    );
  }
}
