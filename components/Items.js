import React from 'react';
import Item from '../containers/Item';
import { ScrollWrapper } from '../styles';

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
      <ScrollWrapper>
        {this.filterList().map((item, index) => <Item key={item.id} index={this.filterList().length - index - 1} {...item} />).reverse()}
      </ScrollWrapper>
    )
  }
};
