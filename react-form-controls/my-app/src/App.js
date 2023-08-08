import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Registration Form (Uncontrolled)</h2>
        <RegistrationFormUncontrolled />

        <h2>Registration Form (Controlled)</h2>
        <RegistrationFormControlled />
      </header>
    </div>
  );
}

export default App;
