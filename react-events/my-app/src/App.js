import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  const handleButtonClick = (text) => {
    alert(`button ${text} clicked!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton
          text="popup"
          color="red"
          onButtonClick={handleButtonClick}
        />
        <CustomButton
          text="newpopup"
          color="blue"
          onButtonClick={handleButtonClick}
        />
        <CustomButton
          text="anotherone"
          color="green"
          onButtonClick={handleButtonClick}
        />
      </header>
    </div>
  );
}

export default App;
