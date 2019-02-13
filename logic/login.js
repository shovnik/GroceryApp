import { createLogic } from 'redux-logic';
import { auth, database } from "../firebase";
import { LOGIN } from '../actions/user';
import { loggedIn } from '../actions/user';

export default createLogic({
  type: LOGIN,
  process: async({ getState, action }, dispatch, done) => {
    try {
      const { email, password } = getState().input;
      const resp = await auth.signInWithEmailAndPassword(email, password);
      const snapshot = await database.ref(`Users/${resp.user.uid}`).once('value');
      const user = snapshot.val();
      dispatch(loggedIn({ uid:user.uid, username:user.username, email:user.email }));
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
