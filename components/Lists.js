import React from 'react';
import Band from '../components/Band';
import List from '../containers/List';
import { ScrollWrapper } from '../styles.js';

export default class Lists extends React.Component {
  render() {
    return (
      <ScrollWrapper>
        {this.props.lists && Object.keys(this.props.lists).map((pushKey, index) =>
          <List key={index} {...this.props.lists[pushKey]} pushKey={pushKey} index={Object.keys(this.props.lists).length - index - 1} />).reverse()
        }
      </ScrollWrapper>
    );
  }
}
