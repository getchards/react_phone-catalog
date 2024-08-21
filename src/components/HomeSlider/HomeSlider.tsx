/* eslint-disable import/no-extraneous-dependencies */
import Slider from 'react-slick';

const images = [
  { src: './images/slider1.png' },
  { src: './images/slider2.png' },
  { src: './images/slider3.png' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const HomeSlider = () => {
  return (
    <div className="home__slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt=""
            className="home__slider-item"
          />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
