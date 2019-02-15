import { connect } from 'react-redux';
import ListsPage from '../components/ListsPage';
import { logout } from '../actions/user';
import { createList } from '../actions/editor';

const mapStatetoProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createList: () => dispatch(createList())
});

export default connect(mapStatetoProps, mapDispatchToProps)(ListsPage);
