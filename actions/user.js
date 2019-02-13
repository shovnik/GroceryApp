export const REGISTER = 'user:register';
export const LOGIN = 'user:login';
export const LOGGED_IN = 'user:loggedIn';
export const LOGGED_OUT = 'input:loggedOut';

export const login = (email, password) => ({
  type: LOGIN
});

export const register = (email, password) => ({
  type: REGISTER
});

export const loggedIn = user => ({
  type: LOGGED_IN,
  payload: user
});

export const updateUsername = () => ({
  type: LOGGED_OUT
});
