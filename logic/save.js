import { createLogic } from 'redux-logic';
import { database } from "../firebase";
import { SAVE_LIST } from '../actions/editor';
import { clearList } from '../actions/editor';

export default createLogic({
  type: SAVE_LIST,
  process: async({ getState, action }, dispatch, done) => {
    try {
      const { uid, date, items, cost } = getState().editor;
      const userID = getState().user.uid;
      if(uid === null)
        uid = database.ref(`Users/${userID}`).push().getKey();
      await database.ref(`Users/${userID}/${uid}`).set({ uid, date, items, cost });
      dispatch(clearList());
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
