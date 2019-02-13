import { connect } from 'react-redux';
import Item from '../components/Item';
import { removeItem, toggleItem } from '../actions/editor';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  toggleItem: id => dispatch(toggleItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
