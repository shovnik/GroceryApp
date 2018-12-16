export const CLEAR_INPUT = 'input:clearInput';
export const UPDATE_USERNAME = 'input:updateUsername';
export const UPDATE_PASSWORD = 'input:updatePassword';

export const clearInput = () => ({
  type: CLEAR_INPUT,
});

export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  payload: username
});

export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  payload: password
});
