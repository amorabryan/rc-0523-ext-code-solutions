export default function RotatingBanner({ items }) {
  const currentIndex = 0;

  return (
    <div className="rotating-banner">
      <Banner item={items[currentIndex]} />
      <PreviousButton />
      <Indicators currentIndex={currentIndex} items={items} />
      <NextButton />
    </div>
  );
}

function Banner({ item }) {
  return <div className="banner">{item}</div>;
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
