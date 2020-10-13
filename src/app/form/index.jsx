import React from 'react';
import { login } from '../utils';

export default function Form() {
  async function onSubmit(e) {
    e.preventDefault();
    try {
      await login({});
    } catch (error) {}
  }

  return (
    <div className='login-container'>
      <form onSubmit={onSubmit}>
        <p>Please login!</p>
        <input type='text' placeholder='username' />
        <input type='text' placeholder='password' />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}
