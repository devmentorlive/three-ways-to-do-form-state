import React, { useState } from 'react';
import { login } from '../utils';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError('Incorrect username or password!');
      setUsername('');
      setPassword('');
    }
    setIsLoading(false);
  }

  return (
    <div className='login-container'>
      {isLoggedIn ? (
        <>
          <h1>Hello {username}</h1>
          <button
            onClick={() => {
              setIsLoggedIn(false);
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
          <button disabled={isLoading} type='submit'>
            Log in
          </button>
        </form>
      )}
    </div>
  );
}
