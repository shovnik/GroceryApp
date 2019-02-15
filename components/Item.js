import React from 'react';
import { Icon } from 'react-native-elements';
import {
  Container,
  CustomButton,
  ItemText
} from '../styles';

export default class Item extends React.Component {
  render() {
    return (
      <Container index={this.props.index}>
        <CustomButton color="#fff" flex={6} onPress={() => this.props.toggleItem(this.props.id)}>
          <ItemText completed={this.props.completed}>{this.props.text}</ItemText>
        </CustomButton>
        <CustomButton color="#f44" flex={1} onPress={() => this.props.removeItem(this.props.id)}>
          <Icon name='clear' type='material' color='#fff'/>
        </CustomButton>
      </Container>
    )
  }
};
