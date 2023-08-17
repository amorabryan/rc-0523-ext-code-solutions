export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    console.log('RegistrationFormUncontrolled input:', formEntries);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input type="username" name="username " required />
      </label>
      <label>
        Password: <input type="password" name="password" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
