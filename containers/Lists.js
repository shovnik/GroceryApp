import { connect } from 'react-redux';
import Lists from '../components/Lists';
import { deleteList } from '../actions/lists';
import { createList, editList } from '../actions/editor';

const mapStatetoProps = state => ({
  lists: state.lists.data
});

const mapDispatchToProps = dispatch => ({
  deleteList: () => dispatch(deleteList()),
  createList: () => dispatch(createList()),
  editList: list => dispatch(editList(list))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Lists);
