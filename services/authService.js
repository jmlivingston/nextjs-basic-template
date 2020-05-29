import API from '../constants/API';
import APP from '../constants/APP';

async function logIn({ userName, password }) {
  const response = await fetch(API.AUTH.LOG_IN, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ userName, password }),
  });
  if (response.ok) {
    window.localStorage.setItem(APP.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify({ userName, password }));
  }
  return response;
}

function logOut() {
  window.localStorage.removeItem(APP.LOCAL_STORAGE_KEYS.AUTH);
  window.location.reload();
}

export { logIn, logOut };
