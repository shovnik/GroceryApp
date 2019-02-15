import React from 'react';
import { BandContainer, BandText } from '../styles';

export default class Band extends React.Component {
  render() {
    return (
      <BandContainer>
        <BandText>[logo] Easy Groceries</BandText>
      </BandContainer>
    )
  }
};
