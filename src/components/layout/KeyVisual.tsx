import * as React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Deformed from './Deformed';
import PickUpThumbnail from './PickUpThumbnail';
import { Singing } from '../../data/interfaces';

export default function KeyVisual() {
  const router = useRouter();
  const isTop = () => {
    return router.pathname === '/';
  };

  return (
    <>
      {isTop() && <PickUp />}
      {!isTop() && <Deformed />}
    </>
  );
}

function PickUp() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div style={{ padding: '20px 0' }}>
      <Slider {...settings}>
        <PickUpThumbnail id='LQ_eazT56FA' singing={new Singing(0, 27, 0, 0)} />
        <PickUpThumbnail id='TGJ9-1LWFtE' singing={new Singing(0, 64, 0, 0)} />
        <PickUpThumbnail id='vbhgQ_C_jaM' singing={new Singing(0, 70, 0, 0)} />
        <PickUpThumbnail id='kdYAZZ5SOFk' singing={new Singing(0, 79, 0, 0)} />
      </Slider>
    </div>
  );
}
