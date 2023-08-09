import logo from './logo.svg';
import './App.css';
import RotatingBanner from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RotatingBanner items={items} />
      </header>
    </div>
  );
}

export default App;
