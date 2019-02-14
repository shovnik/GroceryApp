import React from 'react';
import List from '../containers/List';
import {
  Wrapper,
  CustomButton,
  ButtonText
} from '../styles.js';

export default class Lists extends React.Component {
  render() {
    return (
      <Wrapper>
        <CustomButton color="#09c" onPress={this.props.createList}>
          <ButtonText>New Grocery List</ButtonText>
        </CustomButton>
        {Object.keys(this.props.lists).map((pushKey, index) => <List key={index} {...this.props.lists[pushKey]} pushKey={pushKey} index={index} />)}
      </Wrapper>
    );
  }
}
