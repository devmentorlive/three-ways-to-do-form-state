import React from 'react';
import useLogin from './use-login';

// 129 lines of code
export default function Form() {
  const {
    values,
    setUsername,
    setPassword,
    login,
    logout,
  } = useLogin();

  async function onSubmit(e) {
    e.preventDefault();
    login();
  }

  const { username, password, loading, loggedIn, error } = values;

  return (
    <div className='login-container'>
      {loggedIn ? (
        <>
          <h1>Hello {username}</h1>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {error && <p className='error'>{error}</p>}
          <p>Please login!</p>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
          />
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
