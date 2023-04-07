import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/virtual';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, Virtual, FreeMode} from "swiper";
import DataTreatments from './data'

const Treatments = () => {
    const [data] =  useState(DataTreatments)

  return (
    <div className='px-0' id='treatment'>
      <h1 className='text-center mb-5 text-2xl font-semibold md:mb-7 md:text-4xl lg:text-3xl lg:mb-4 '>Treatments</h1>
        <Swiper
          slidesPerView={3}
          freeMode={true}
          Navigation={true}
          modules={[Virtual,Navigation,FreeMode]}
          className='mySwiper'
          breakpoints={{
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5,
            }
          }}
        >
          {data.map((value,index) =>{
            return(
              <SwiperSlide key={index} virtualIndex={value.id} className='group'>
                <div className='h-fit w-fit overflow-hidden relative cursor-pointer'>
                  <img src={value.image} alt="" className='h-full w-full object-cover group-hover:scale-110 transition-all duration-300'/>
                  <div className='h-full w-full group-hover:bg-black/40 absolute top-0 transition-all duration-300'>
                  <div className='transition-all duration-300 absolute bottom-0 w-full pl-4 translate-y-6 group-hover:translate-y-0 text-[#e6bd2a]'>
                    <h1 className='transition-all duration-300 text-base md:text-lg lg:text-lg font-semibold tracking-wide' style={{textShadow: '1px 1px 1px black'}}>{value.title}</h1>
                    <p className='font-light text-sm md:text-base lg:text-base text-white'>IDR. 250K</p>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  )
}

export default Treatments