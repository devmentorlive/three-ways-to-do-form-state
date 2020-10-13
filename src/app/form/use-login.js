import { useState } from 'react';
import { login as doLogin } from '../utils';

const defaultValues = {
  username: '',
  password: '',
  error: null,
  loading: false,
};

export default function useLogin() {
  const [values, setValues] = useState(defaultValues);

  async function login() {
    try {
      setLoading();
      await doLogin(values);
      loginSuccess();
    } catch {
      loginFailed();
    }
  }

  function loginSuccess() {
    setValues({
      ...defaultValues,
      loggedIn: true,
      loading: false,
    });
  }

  function loginFailed() {
    setValues((prev) => ({
      ...prev,
      loggedIn: false,
      loading: false,
      error: 'Invalid username or password',
    }));
  }

  function setLoading() {
    setValues((prev) => ({ ...prev, loading: true }));
  }

  function logout() {
    setValues(defaultValues);
  }

  function setUsername(username) {
    setValues((prev) => ({ ...prev, username }));
  }

  function setPassword(password) {
    setValues((prev) => ({ ...prev, password }));
  }

  return { values, setUsername, setPassword, login, logout };
}
