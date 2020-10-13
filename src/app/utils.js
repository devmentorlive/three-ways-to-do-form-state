export async function login({ username, password }) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (username === 'username' && password === 'password')
        resolve();
      else reject();
    }, 1000),
  );
}
