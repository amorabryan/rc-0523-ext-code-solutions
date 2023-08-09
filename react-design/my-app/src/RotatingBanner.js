import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="rotating-banner">
      <Banner item={items[currentIndex]} />
      <PreviousButton />
      <Indicators currentIndex={currentIndex} items={items} />
      <NextButton />
    </div>
  );
}

function Banner({ currentItem }) {
  return <div className="banner">{currentItem}</div>;
}

function NextButton() {
  return <button className="next-button">Next</button>;
}

function PreviousButton() {
  return <button className="previous-button">Prev</button>;
}

const Indicators = ({ currentIndex, items }) => {
  return (
    <div className="indicators">
      {items.map((item, index) => (
        <button
          key={index}
          className={`indicator ${index === currentIndex ? 'active' : ''}`}>
          {index}
        </button>
      ))}
    </div>
  );
};
