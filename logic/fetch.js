import { createLogic } from 'redux-logic';
import { database } from "../firebase";
import { FETCH_LISTS } from '../actions/lists';
import { fetchListsSuccess } from '../actions/lists';

export default createLogic({
  type: FETCH_LISTS,
  process: async({ getState, action }, dispatch, done) => {
    try {
      const uid = getState().user.uid;
      const snapshot = await database.ref(`Lists/${uid}`).once('value');
      dispatch(fetchListsSuccess(snapshot.val()));
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
