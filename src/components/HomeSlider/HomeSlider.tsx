import { useState } from 'react';

const images = [
  { src: './images/slider1.png', alt: 'Slide 1' },
  { src: './images/top-bar_cart.png', alt: 'Slide 2' },
  { src: './images/slider1.png', alt: 'Slide 3' },
];

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <button
        onClick={prevSlide}
        className="carousel__btn carousel__btn--prev"
        disabled={activeIndex === 0}
      >
        &lt;
      </button>
      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        className="carousel__img"
      />
      <button
        onClick={nextSlide}
        className="carousel__btn carousel__btn--next"
        disabled={activeIndex === images.length - 1}
      >
        &gt;
      </button>
      <div className="carousel__indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel__indicator ${
              index === activeIndex ? 'carousel__indicator--active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
