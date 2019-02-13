import React from 'react';
import {
  Form,
  Input,
  CustomButton,
  ButtonText
} from '../styles';

export default class NewItem extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="New Item" ref={ref => {this.inputRef = ref}} onChangeText={text => {this.input = text}}></Input>
        <CustomButton color="#0099cc" flex={1} onPress={() => { if(this.input!=='')this.props.addItem(this.input); this.inputRef.clear(); this.input = ''}}>
          <ButtonText>Add</ButtonText>
        </CustomButton>
      </Form>
    )
  }
};
