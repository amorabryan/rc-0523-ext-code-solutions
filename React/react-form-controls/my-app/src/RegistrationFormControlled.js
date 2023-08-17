import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('RegistrationFormControlled input:', { username, password });
    setUsername('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
