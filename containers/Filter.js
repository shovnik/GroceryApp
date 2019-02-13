import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { setFilter } from '../actions/editor';

const mapStateToProps = state => ({
  filter: state.editor.filter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
