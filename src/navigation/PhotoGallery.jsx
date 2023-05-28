import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import first from '@/images/first.jpg';
import second from '@/images/second.jpg';
import third from '@/images/third.jpg';
import forth from '@/images/forth.jpg';
import fifth from '@/images/fifth.jpg';
import sixth from '@/images/sixth.jpg';
import seventh from '@/images/seventh.jpg';

function PhotoGallery() {

     const photos = [
  { foto: first, name: 'Jakis opis 1' },
  { foto: second, name: 'Jakis opis 2' },
  { foto: third, name: 'Jakis opis 3' },
  { foto: forth, name: 'Jakis opis 4' },
  { foto: fifth, name: 'Jakis opis 5' },
  { foto: sixth, name: 'Jakis opis 6' },
  { foto: seventh, name: 'Jakis opis 7' },
];


  return (
    <div className="max-w-7xl px-4 py-2 mx-auto">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-[52rem] py-8 px-0 relative"
      >
        {photos.map((photo, index)  => (
        <SwiperSlide key={index}>
            <img src={photo.foto} alt="slide_image" />
        </SwiperSlide>
         ))}
        <div className="slider-controler relative bottom-8 flex items-center justify-center">
          <div className="swiper-pagination relative"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default PhotoGallery;