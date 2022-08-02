import React from 'react'
import Image from 'next/image'

import Carousel from 'react-bootstrap/Carousel';
import style from '../styles/Slider.module.css'
//عکس برای اسلاید ها

import slider2 from '../public/slide2.jpg'
import slider3 from '../public/slide3.jpg'


export default function Slider() {
  return (
    <div >
      <Carousel variant="dark">

        <Carousel.Item className={style.slider}>
          <Image

            src={slider2}
            alt="Second slide"
            className={style.slider}

          />

        </Carousel.Item>

        <Carousel.Item className={style.slider}>
          <Image
            src={slider3}
            alt="Third slide"
            className={style.slider}
          />

        </Carousel.Item>

      </Carousel>
    </div>
  )
}
