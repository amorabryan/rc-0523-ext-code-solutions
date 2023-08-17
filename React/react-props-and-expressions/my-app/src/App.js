import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

const buttons = [
  { label: 'I', style: 'red' },
  { label: 'Know', style: 'green' },
  { label: 'React', style: 'blue' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton buttons={buttons} />
      </header>
    </div>
  );
}

export default App;
