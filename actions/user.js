export const CREATE_USER = 'user:createUser';
export const VERIFY_USER = 'user:verifyUser';

export const createUser = credentials => ({
  type: CREATE_USER,
  payload: credentials
});

export const verifyUser = credentials => ({
  type: VERIFY_USER,
  payload: credentials
});
