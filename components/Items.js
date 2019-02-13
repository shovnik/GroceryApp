import React from 'react';
import Item from '../containers/Item';
import { View } from 'react-native';

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this);
  }
  filterList() {
    switch (this.props.filter) {
      case 'INCOMPLETE':
        return this.props.items.filter(item => !item.completed);
      case 'COMPLETE':
        return this.props.items.filter(item => item.completed);
      default:
        return this.props.items;
    }
  }
  render() {
    return (
      <View>
        {this.filterList().map((item, index) => <Item key={item.id} index={index} {...item} />)}
      </View>
    )
  }
};
