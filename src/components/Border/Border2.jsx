import React from 'react'
import Flower2 from './../../assets/imgae/floral.png';

const Border2 = () => {
  return (
    <div className='relative mt-2 md:mt-0 lg:mt-2'>
    <div className='flex items-center'>
        <div className='flex items-center w-full gap-2 px-14 ml-3 md:pl-20 md:px-20 md:gap-3 lg:px-28'>
            <span className='w-[50%] border border-[#EBBC61] h-[1%]'></span>
            <div className='max-w-[25%] md:max-w-[28%] opacity-80'>
                <img src={Flower2} alt="flower2" />            
            </div>
            <span className='w-[50%] border border-[#EBBC61] h-[1%]'></span>
        </div>
    </div>
</div>
  )
}

export default Border2