export default function loginReducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'login':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'logout':
      return {
        ...state,
        loggedIn: false,
        error: null,
        username: '',
        password: '',
      };
    case 'success':
      return {
        ...state,
        loggedIn: true,
        loading: false,
      };
    case 'error':
      return {
        ...state,
        error: 'Incorrect username or password',
        loading: false,
        username: '',
        password: '',
      };
    default:
      return state;
  }
}
