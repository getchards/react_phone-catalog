/* eslint-disable import/no-extraneous-dependencies */
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
  { src: './images/slider1.png' },
  { src: './images/slider1.png' },
  { src: './images/slider1.png' },
];

const HomeSlider = () => {
  return (
    <div className="home__slider">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="home__slider-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
