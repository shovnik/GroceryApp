import { connect } from 'react-redux';
import { addItem } from '../actions/editor';
import NewItem from '../components/NewItem';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
