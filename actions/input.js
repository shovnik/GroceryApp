export const UPDATE_EMAIL = 'input:updateEmail';
export const UPDATE_PASSWORD = 'input:updatePassword';

export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: email
});

export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  payload: password
});
