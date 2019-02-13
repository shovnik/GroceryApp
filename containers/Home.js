import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStatetoProps = state => ({
  loggedIn: state.user.loggedIn,
  editActive: state.editor.active
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
