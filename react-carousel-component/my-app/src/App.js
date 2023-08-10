import './App.css';
import Carousel from './Carousel';

const images = [
  {
    id: 1,
    src: '/images/001.png',
    alt: 'Bulbasaur',
  },
  {
    id: 2,
    src: '/images/004.png',
    alt: 'Charmander',
  },
  {
    id: 3,
    src: '/images/007.png',
    alt: 'Squirtle',
  },
  {
    id: 4,
    src: '/images/025.png',
    alt: 'Pikachu',
  },
  {
    id: 5,
    src: '/images/039.png',
    alt: 'Jigglypuff',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel images={images} />
      </header>
    </div>
  );
}

export default App;
