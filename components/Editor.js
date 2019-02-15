import React from 'react';
import Band from '../components/Band'
import NewItem from '../containers/NewItem';
import Filter from '../containers/Filter';
import Items from '../containers/Items';
import Cost from '../containers/Cost';
import {
  StaticWrapper,
  CustomButton,
  ButtonText
} from '../styles.js';

export default class Editor extends React.Component {
  render() {
    return (
      <StaticWrapper keyboardShouldPersistTaps={'handled'}>
        <Band />
        <Filter />
        <NewItem />
        <Items />
        <Cost></Cost>
        <CustomButton color="#09c" onPress={this.props.saveList}>
          <ButtonText>Save</ButtonText>
        </CustomButton>
        <CustomButton color="#f44" onPress={this.props.cancelList}>
          <ButtonText>Cancel</ButtonText>
        </CustomButton>
      </StaticWrapper>
    );
  }
}
