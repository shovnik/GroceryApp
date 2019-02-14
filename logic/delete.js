import { createLogic } from 'redux-logic';
import { database } from "../firebase";
import { DELETE_LIST, fetchLists } from '../actions/lists';

export default createLogic({
  type: DELETE_LIST,
  process: async({ getState, action }, dispatch, done) => {
    try {
      const uid = getState().user.uid;
      const deleteKey = getState().lists.deleteKey;
      await database.ref(`Lists/${uid}/${deleteKey}`).remove();
      dispatch(fetchLists());
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
