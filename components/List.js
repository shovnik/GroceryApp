import React from 'react';
import { Icon } from 'react-native-elements';
import {
  Container,
  CustomButton,
  FlexText
} from '../styles';

export default class List extends React.Component {
  render() {
    return (
      <Container index={this.props.index}>
        <FlexText flex={3} align="left">{this.props.date}</FlexText>
        <FlexText flex={2} align="right">${this.props.cost.toFixed(2)}</FlexText>
        <CustomButton color="#09c" flex={1} onPress={() => this.props.editList({ pushKey: this.props.pushKey, cost: this.props.cost, items: this.props.items })}>
          <Icon name='edit' type='material' color='#fff'/>
        </CustomButton>
        <CustomButton color="#f44" flex={1} onPress={() => this.props.deleteList(this.props.pushKey)}>
          <Icon name='delete' type='material' color='#fff'/>
        </CustomButton>
      </Container>
    )
  }
};
