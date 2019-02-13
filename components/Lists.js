import React from 'react';
import {
  Wrapper,
  CustomButton,
  ButtonText
} from '../styles.js';

export default class Lists extends React.Component {
  render() {
    return (
      <Wrapper>
        <CustomButton color="#0099cc" onPress={this.props.createList}>
          <ButtonText>New Grocery List</ButtonText>
        </CustomButton>
      </Wrapper>
    );
  }
}
