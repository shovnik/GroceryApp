import { createLogic } from 'redux-logic';
import { auth, database } from "../firebase";
import { REGISTER } from '../actions/user';
import { loggedIn } from '../actions/user';

export default createLogic({
  type: REGISTER,
  process: async({ getState, action }, dispatch, done) => {
    try {
      const { email, password } = getState().input;
      const username = email.split('@')[0];
      const resp = await auth.createUserWithEmailAndPassword(email, password);
      const user = { uid: resp.user.uid, username, email };
      await database.ref(`Users/${user.uid}`).set({...user});
      dispatch(loggedIn(user));
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
