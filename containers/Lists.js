import { connect } from 'react-redux';
import Lists from '../components/Lists';

const mapStatetoProps = state => ({
  lists: state.lists.data
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStatetoProps, mapDispatchToProps)(Lists);
