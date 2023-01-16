import React, { useState } from 'react';
import { SliderData } from './SliderData';
import "./Events.css"
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} /> */}
      {/* <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      <i className='bx bx-left-arrow-alt left-arrow ' onClick={prevSlide}></i>
      <i className='bx bx-right-arrow-alt right-arrow ' onClick={nextSlide}></i>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="" className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;