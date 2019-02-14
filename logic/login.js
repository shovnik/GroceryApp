import { createLogic } from 'redux-logic';
import { auth, database } from "../firebase";
import { LOGIN, loggedIn } from '../actions/user';
import { fetchLists } from '../actions/lists';

export default createLogic({
  type: LOGIN,
  process: async({ getState, action }, dispatch, done) => {
    try {
      const { email, password } = getState().input;
      const resp = await auth.signInWithEmailAndPassword(email, password);
      const uid = resp.user.uid;
      const snapshot = await database.ref(`Users/${uid}`).once('value');
      dispatch(loggedIn({ ...snapshot.val(), uid }));
      dispatch(fetchLists());
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
