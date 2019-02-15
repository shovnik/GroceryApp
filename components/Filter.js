import React from 'react';
import { Text } from 'react-native';
import { Container, FilterBox } from '../styles';

export default class Filter extends React.Component {
  render() {
    return (
      <Container>
        <FilterBox isActive={this.props.filter === 'ALL'} onPress={() => this.props.setFilter('ALL')}>
          <Text>All</Text>
        </FilterBox>
        <FilterBox isActive={this.props.filter === 'INCOMPLETE'} onPress={() => this.props.setFilter('INCOMPLETE')}>
          <Text>Purchased</Text>
        </FilterBox>
        <FilterBox isActive={this.props.filter === 'COMPLETE'}  onPress={() => this.props.setFilter('COMPLETE')}>
          <Text>Remaining</Text>
        </FilterBox>
      </Container>
    )
  }
};
