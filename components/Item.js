import React from 'react';
import {
  Container,
  CustomButton,
  ItemText,
  ButtonText
} from '../styles';

export default class Item extends React.Component {
  render() {
    return (
      <Container index={this.props.index}>
        <CustomButton color="#fff" flex={4} onPress={() => this.props.toggleItem(this.props.id)}>
          <ItemText completed={this.props.completed}>{this.props.text}</ItemText>
        </CustomButton>
        <CustomButton color="#f44" flex={1} onPress={() => this.props.removeItem(this.props.id)}>
          <ButtonText>Delete</ButtonText>
        </CustomButton>
      </Container>
    )
  }
};
