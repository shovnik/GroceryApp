import { createLogic } from 'redux-logic';
import { database } from "../firebase";
import { SAVE_LIST, clearList } from '../actions/editor';
import { fetchLists } from '../actions/lists';

export default createLogic({
  type: SAVE_LIST,
  process: async({ getState, action }, dispatch, done) => {
    try {
      const { pushKey, date, items, cost } = getState().editor;
      if(!items || !items.length) {
        alert('List must contain at least 1 item.');
        return done();
      }
      const uid = getState().user.uid;
      if(pushKey !== null)
        await database.ref(`Lists/${uid}/${pushKey}`).set({ date, items, cost });
      else
        await database.ref(`Lists/${uid}`).push({ date, items, cost });
      dispatch(clearList());
      dispatch(fetchLists());
    } catch (e) {
      alert(e);
    } finally {
      done();
    }
  }
});
