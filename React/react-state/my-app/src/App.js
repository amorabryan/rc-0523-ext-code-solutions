import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleButton color="red" text="Btn 1" />
        <ToggleButton color="blue" text="Btn 2" />
        <ToggleButton color="green" text="Btn 3" />
      </header>
    </div>
  );
}

export default App;
