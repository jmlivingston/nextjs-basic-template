import { useState } from 'react';
import { logIn } from '../../services/authService';

export default function Login() {
  const [hasError, setError] = useState(false);
  const [form, setForm] = useState({ userName: '', password: '' });

  async function submit() {
    const response = await logIn(form);
    if (response.ok) {
      window.location.reload();
    } else {
      setError(true);
    }
  }

  return (
    <div className="mx-auto">
      <h1 className="text-center">Login</h1>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          className="form-control"
          id="userName"
          onChange={(event) => setForm({ ...form, userName: event.target.value })}
          type="text"
          value={form.userName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          onChange={(event) => setForm({ ...form, password: event.target.value })}
          type="password"
          value={form.password}
        />
      </div>
      <button
        className="btn btn-primary mx-auto d-block"
        disabled={form.userName === '' || form.password === ''}
        onClick={submit}>
        Submit
      </button>
      {hasError && (
        <div className="alert alert-danger mt-3">
          <strong>Error: </strong>User name and password is invalid!
        </div>
      )}
    </div>
  );
}
