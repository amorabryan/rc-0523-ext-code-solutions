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
        <RotatingBanner items={items} />
      </header>
    </div>
  );
}

export default App;
