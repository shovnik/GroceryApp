import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../actions/input';
import { register, login } from '../actions/user';
import Login from '../components/Login';

const mapStatetoProps = state => ({
  email: state.input.email,
  password: state.input.password
});

const mapDispatchToProps = dispatch => ({
  updateEmail: email => dispatch(updateEmail(email)),
  updatePassword: password => dispatch(updatePassword(password)),
  register: () => dispatch(register()),
  login: () => dispatch(login())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Login);
