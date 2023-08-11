import './App.css';
import Accordion from './Accordion';

const languages = [
  {
    language: 'Hypertext Markup Language',
    about:
      'Hypertext Markup Language (HTML) is the standard markup langugage for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web',
  },
  {
    language: 'Cascading Style Sheets',
    about:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. Css is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.',
  },
  {
    language: 'JavaScript',
    about:
      'JavaScript, often abbreviated as JS, is a high-level interpreted programming langugage that conforms to the ECMAScript specifications. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-oreintation and first-class functions.',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accordion languages={languages} />
      </header>
    </div>
  );
}

export default App;
