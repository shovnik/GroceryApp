import { createLogic } from 'redux-logic';
import { auth } from "../firebase";
import { LOGOUT, loggedOut } from '../actions/user';
import { clearLists } from '../actions/lists';

export default createLogic({
  type: LOGOUT,
  process: async({ getState, action }, dispatch, done) => {
    try {
      await auth.signOut();
      dispatch(clearLists());
      dispatch(loggedOut());
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
