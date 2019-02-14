import React from 'react';
import {
  Container,
  CustomButton,
  FlexText,
  ButtonText
} from '../styles';

export default class List extends React.Component {
  render() {
    return (
      <Container index={this.props.index}>
        <FlexText flex={3} align="left">{this.props.date}</FlexText>
        <FlexText flex={2} align="right">${this.props.cost.toFixed(2)}</FlexText>
        <CustomButton color="#09c" flex={1} onPress={() => this.props.editList({ pushKey: this.props.pushKey, cost: this.props.cost, items: this.props.items })}>
          <ButtonText>Edit</ButtonText>
        </CustomButton>
        <CustomButton color="#f44" flex={1} onPress={() => this.props.deleteList(this.props.pushKey)}>
          <ButtonText>X</ButtonText>
        </CustomButton>
      </Container>
    )
  }
};
