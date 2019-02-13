import { connect } from 'react-redux';
import Editor from '../components/Editor';
import {
  clearList,
  saveList
} from '../actions/editor';

const mapStatetoProps = state => ({
  date: state.editor.date,
});

const mapDispatchToProps = dispatch => ({
  saveList: () => dispatch(saveList()),
  cancelList: () => dispatch(clearList())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Editor);
