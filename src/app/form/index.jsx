import React, { useReducer } from 'react';
import { login } from '../utils';
import loginReducer from './reducer';

// leaky abstraction
const initalState = {
  username: '',
  password: '',
  loggedIn: false,
  loading: false,
  error: null,
};

// leaky abstraction
const actions = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  SUCCESS: 'success',
  ERROR: 'error',
  FIELD: 'field',
};

// 142 lines of code
export default function Form() {
  const [state, dispatch] = useReducer(loginReducer, initalState);
  const { username, password, loading, error, loggedIn } = state;

  async function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'login' }); // susceptible to typos
    try {
      await login({ username, password });
      dispatch({ type: actions.SUCCESS });
    } catch (error) {
      dispatch({ type: actions.ERROR });
    }
  }

  return (
    <div className='login-container'>
      {loggedIn ? (
        <>
          <h1>Hello {username}</h1>
          <button onClick={() => dispatch({ type: actions.LOGOUT })}>
            Log out
          </button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {error && <p className='error'>{error}</p>}
          <p>Please login!</p>
          <input
            type='text'
            value={username}
            onChange={(e) =>
              dispatch({
                type: actions.FIELD,
                field: 'username',
                value: e.target.value,
              })
            }
            placeholder='username'
          />
          <input
            type='text'
            value={password}
            onChange={(e) =>
              dispatch({
                type: actions.FIELD,
                field: 'password',
                value: e.target.value,
              })
            }
            placeholder='password'
          />
          <button disabled={loading} type='submit'>
            Log in
          </button>
        </form>
      )}
    </div>
  );
}
