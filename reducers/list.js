import {
  ADD_ITEM,
  CLEAR_LIST,
  CREATE_LIST,
  FETCH_LIST_SUCCESS,
  REMOVE_ITEM,
  SUBMIT_RECEIPT,
  TOGGLE_ITEM
} from '../actions/list';

export default function listReducer(state = { active: false, items: [], receipt: {} }, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, {
          completed: false,
          key: Date.now(),
          text: payload
        }]
      };
    case CLEAR_LIST:
      return {
        active: false,
        items: [],
        receipt: {}
      };
    case CREATE_LIST:
      return {
        ...state,
        active:true
      };
    case FETCH_LIST_SUCCESS:
      return payload;
    case REMOVE_ITEM:
      return {
        ...state,
        items: items.filter(item => item.key !== payload)
      };
    case SUBMIT_RECEIPT:
      return {
        ...state,
        receipt: payload
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.key === payload ? { ...item, completed: !item.completed }: item
        )
      };
    default:
      return state;
  }
}
