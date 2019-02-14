import {
  CREATE_LIST,
  EDIT_LIST,
  CLEAR_LIST,
  ADD_ITEM,
  SET_FILTER,
  REMOVE_ITEM,
  TOGGLE_ITEM,
  UPDATE_COST
} from '../actions/editor';

const initialState = {
  active: false,
  filter: 'ALL',
  pushKey: null,
  date: null,
  items: [],
  cost: 0
}

export default function editorReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_LIST:
      return {
        ...state,
        active:true,
        date: new Date().toJSON().slice(0,10)
      };
    case EDIT_LIST:
      return {
        ...payload,
        active:true,
        filter: 'ALL',
        date: new Date().toJSON().slice(0,10)
      };
    case CLEAR_LIST:
      return {
        ...initialState
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, {
          completed: false,
          id: Date.now(),
          text: payload
        }]
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload ? { ...item, completed: !item.completed }: item
        )
      };
    case UPDATE_COST:
      return {
        ...state,
        cost: payload
      };
    default:
      return state;
  }
}
