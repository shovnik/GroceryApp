export const REGISTER = 'user:register';
export const LOGIN = 'user:login';
export const LOGGED_IN = 'user:loggedIn';
export const LOGOUT = 'user:logout';
export const LOGGED_OUT = 'user:loggedOut';

export const login = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});

export const register = (email, password) => ({
  type: REGISTER
});

export const loggedIn = user => ({
  type: LOGGED_IN,
  payload: user
});

export const loggedOut = () => ({
  type: LOGGED_OUT
});
