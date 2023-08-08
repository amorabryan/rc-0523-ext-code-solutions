import './ValidatedInput.css';
import { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function onPasswordChange(event) {
    event.preventDefault();
    const inputPassword = event.target.value;
    if (inputPassword.length === 0) {
      setError('A password is required.');
    } else if (inputPassword.length < 8) {
      setError('Your password is too short.');
    } else {
      setError('');
    }
    setPassword(inputPassword);
  }

  return (
    <form>
      <div>
        <label>Password</label>
      </div>
      <div className="password-input">
        <input
          type="password"
          name="password"
          value={password}
          onInput={onPasswordChange}
          required
        />{' '}
        {error ? (
          <FaTimes className="error" />
        ) : (
          password.length >= 8 && <FaCheck className="verified" />
        )}
      </div>
      <p className="error">{error}</p>
    </form>
  );
}
