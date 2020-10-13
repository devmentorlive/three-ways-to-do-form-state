import React, { useState } from 'react';
import { login } from '../utils';

// 84 lines of code
export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login({ username, password });
      setLoggedIn(true);
    } catch (error) {
      setError('Incorrect username or password!');
      setUsername('');
      setPassword('');
    }
    setLoading(false);
  }

  return (
    <div className='login-container'>
      {loggedIn ? (
        <>
          <h1>Hello {username}</h1>
          <button
            onClick={() => {
              setLoggedIn(false);
              setUsername('');
              setPassword('');
            }}>
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
