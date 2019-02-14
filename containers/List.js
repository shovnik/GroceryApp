import { connect } from 'react-redux';
import List from '../components/List';
import { deleteList, updateDeleteKey } from '../actions/lists';
import { editList } from '../actions/editor';

const mapStatetoProps = state => ({});

const mapDispatchToProps = dispatch => ({
  deleteList: deleteKey => {
    dispatch(updateDeleteKey(deleteKey));
    dispatch(deleteList());
  },
  editList: list => dispatch(editList(list))
});

export default connect(mapStatetoProps, mapDispatchToProps)(List);
