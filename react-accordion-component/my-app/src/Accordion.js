import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ languages }) {
  const [isOpen, setIsOpen] = useState('');

  function handleLanguageClick(language) {
    isOpen === language ? setIsOpen('') : setIsOpen(language);
  }

  return (
    <Languages
      languages={languages}
      handleOnClick={handleLanguageClick}
      isOpen={isOpen}
    />
  );
}

function Languages({ languages, handleOnClick, isOpen }) {
  return (
    <div className="language-tab">
      {languages.map((language) => {
        return (
          <div key={language.language}>
            <button
              className="names"
              type="button"
              onClick={(event) => handleOnClick(language)}>
              {language.language}
            </button>
            {isOpen === language && <p>{language.about}</p>}
          </div>
        );
      })}
    </div>
  );
}
