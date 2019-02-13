import { connect } from 'react-redux';
import Items from '../components/Items';

const mapStateToProps = state => ({
  items: state.editor.items,
  filter: state.editor.filter
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
