import React from 'react'
import Room from './../../assets/imgae/room.jpeg'
import Wc from './../../assets/imgae/wc.jpeg'
import Flower from './../../assets/imgae/flowerLocation2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/virtual';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Virtual, FreeMode} from "swiper";

const Location = () => {
  return (
    <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-none md:bg-red-900'>
        <div className='bg-[#c6a83d] flex items-center text-sm text-center p-8 md:text-lg lg:p-10 lg:text-xl relative'>
            <p className='leading-relaxed racking-wide'>Faheema spa Terletak di lantai 3 gedung dnurs memiliki dua ruangan terpisah untuk perawatan, yang pertama adalah ruang SPA, ada 8 tempat tidur Spa dan 3 kursi untuk refleksi dan satu lagi ruang perawatan rambut dengan 3 meja perawatan rambut.</p>
            <img src={Flower} alt="" className='absolute w-[15%] -left-0 -top-0'/>
            <img src={Flower} alt="" className='absolute w-[15%] -top-0 right-0 rotate-90'/>
            <img src={Flower} alt="" className='absolute w-[15%] -bottom-0 left-0 rotate-[270deg]'/>
            <img src={Flower} alt="" className='absolute w-[15%] -bottom-0 right-0 rotate-[180deg]'/>
        </div>
        <Swiper
        slidesPerView={1}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay,Virtual,FreeMode]}
        className='mySwiper h-full w-full overflow-hidden relative cursor-pointer lg:h-[24rem] group'
        >
          <SwiperSlide>
            <img src={Room} alt="" className='w-full object-cover h-[100%] absolute group-hover:scale-110 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Wc} alt="" className='w-full object-cover h-[100%] absolute group-hover:scale-110 transition-all duration-500'/>
          </SwiperSlide>
            <div className='h-full w-full group-hover:bg-black/40 absolute top-0 transition-all duration-500'></div>
        </Swiper>
    </div>
  )
}

export default Location
