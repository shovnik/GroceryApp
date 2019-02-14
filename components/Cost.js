import React from 'react';
import {
  CostContainer,
  PlainText,
  NumericInput
} from '../styles';

export default class Cost extends React.Component {
  constructor(props) {
    super(props);
    this.filterInput = this.filterInput.bind(this);
  }
  filterInput(text) {
    let newInput = '';
    let digits = '1234567890';
    let periodCount = 0;
    for(let i = 0; i < text.length; i++) {
      if(digits.indexOf(text[i]) > -1)
        newInput += text[i];
      else if(text[i] == '.' && !periodCount) {
        newInput += text[i];
        periodCount++;
      }
      else
        alert("Enter numbers and one '.' only.");
    }
    this.props.updateCost(parseFloat(newInput));
  }
  render() {
    return (
      <CostContainer>
        <NumericInput keyboardType='numeric' maxLength={7} onChangeText={text => this.filterInput(text)} />
        <PlainText>Cost: $ </PlainText>
      </CostContainer>
    )
  }
};
