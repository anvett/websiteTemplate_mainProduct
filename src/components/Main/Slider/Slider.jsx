import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import styles from './Slider.module.scss';

const Slider = ({ slides }) => {
  return (
    <Carousel className={styles.carousel} interval={1000} >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <Image
            src={slide.imageUrl}
            alt={`Slide ${index}`}
            width={600} 
            height={350} 
            layout="responsive" 
            className={styles.image}
          />
          <Carousel.Caption>   
            <h3 className={styles.title} >{slide.title}</h3>
            <p className={styles.description} >{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
