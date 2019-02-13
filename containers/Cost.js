import { connect } from 'react-redux';
import Cost from '../components/Cost';
import {
  updateCost
} from '../actions/editor';

const mapStatetoProps = state => ({
  cost: state.editor.cost
});

const mapDispatchToProps = dispatch => ({
  updateCost: cost => dispatch(updateCost(cost))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Cost);
