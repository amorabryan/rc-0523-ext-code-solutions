import { useState, useCallback, useEffect } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
  }

  function handlePreviousClick() {
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + images.length) % images.length
    );
  }

  function handleIndicatorClick(index) {
    setCurrentIndex(index);
  }

  const nextImage = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images]);

  useEffect(() => {
    const timer = setTimeout(() => nextImage(), 3000);
    return () => clearTimeout(timer);
  }, [nextImage]);

  return (
    <div>
      <div className="rotating-banner">
        <PreviousButton onClick={handlePreviousClick} />
        <Icons currentIndex={currentIndex} images={images} />
        <NextButton onClick={handleNextClick} />
      </div>
      <div>
        <Indicators
          currentIndex={currentIndex}
          images={images}
          onClick={handleIndicatorClick}
        />
      </div>
    </div>
  );
}

function NextButton({ onClick }) {
  function handleNextClick() {
    onClick();
  }
  return <FaChevronRight className="next-button" onClick={handleNextClick} />;
}

function PreviousButton({ onClick }) {
  function handlePreviousClick() {
    onClick();
  }
  return (
    <FaChevronLeft className="previous-button" onClick={handlePreviousClick} />
  );
}

function Icons({ images, currentIndex }) {
  return (
    <div className="images">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={`indicator-image ${
            index === currentIndex ? 'active' : 'hidden'
          }`}
        />
      ))}
    </div>
  );
}

function Indicators({ currentIndex, images, onClick }) {
  return (
    <div className="indicators">
      {images.map((_, index) => (
        <span
          key={index}
          className={`fa-dot ${index === currentIndex ? 'active' : ''}`}
          onClick={() => onClick(index)}>
          {index === currentIndex ? <FaCircle /> : <FaRegCircle />}
        </span>
      ))}
    </div>
  );
}
