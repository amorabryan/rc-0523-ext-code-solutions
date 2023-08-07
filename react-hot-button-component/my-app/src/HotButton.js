import { useState } from 'react';
export default function HotButton() {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState('cold');

  function buttonClick() {
    let currentTemp = 'cold';
    if (count < 3) {
      currentTemp = 'cold';
    } else if (count < 6) {
      currentTemp = 'cool';
    } else if (count < 9) {
      currentTemp = 'tepid';
    } else if (count < 12) {
      currentTemp = 'warm';
    } else if (count < 15) {
      currentTemp = 'hot';
    } else {
      currentTemp = 'nuclear';
    }
    setCount(count + 1);
    setTemp(currentTemp);
  }

  return (
    <main>
      <button className={`hot-button ${temp}`} onClick={buttonClick}>
        Hot Button
      </button>
      <p className="click-count">{count} Clicks</p>
    </main>
  );
}
