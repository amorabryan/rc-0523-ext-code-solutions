import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % items.length);
  }

  function handlePreviousClick() {
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + items.length) % items.length
    );
  }

  function handleIndicatorClick(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="rotating-banner">
      <Banner currentItem={items[currentIndex]} />
      <PreviousButton onClick={handlePreviousClick} />
      <Indicators
        currentIndex={currentIndex}
        items={items}
        onClick={handleIndicatorClick}
      />
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

function Banner({ currentItem }) {
  return <div className="banner">{currentItem}</div>;
}

function NextButton({ onClick }) {
  function handleNextClick() {
    onClick();
  }
  return (
    <button className="next-button" onClick={handleNextClick}>
      Next
    </button>
  );
}

function PreviousButton({ onClick }) {
  function handlePreviousClick() {
    onClick();
  }
  return (
    <button className="previous-button" onClick={handlePreviousClick}>
      Prev
    </button>
  );
}

function Indicators({ currentIndex, items, onClick }) {
  return (
    <div className="indicators">
      {items.map((item, index) => (
        <button
          key={index}
          className={`indicator ${index === currentIndex ? 'active' : ''}`}
          onClick={() => onClick(index)}>
          {index}
        </button>
      ))}
    </div>
  );
}
