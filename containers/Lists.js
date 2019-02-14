import { connect } from 'react-redux';
import Lists from '../components/Lists';
import { createList } from '../actions/editor';

const mapStatetoProps = state => ({
  lists: state.lists.data
});

const mapDispatchToProps = dispatch => ({
  createList: () => dispatch(createList())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Lists);
