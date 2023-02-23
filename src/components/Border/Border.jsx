import React from 'react'
import Flower1 from './../../assets/imgae/leaf1.png';
import Flower2 from './../../assets/imgae/floral.png';
import Flower3 from './../../assets/imgae/leaf.png';

const Border = () => {
  return (
    <div className='relative mt-2 md:mt-0 lg:mt-2'>
        <div className='flex items-center'>
            <div className='max-w-[15%] relative opacity-80 -left-2 md:max-w-[12%] md:-left-3 lg:max-w-[9%] lg:-left-4'>
                <img src={Flower1} alt="flowe1" />
            </div>
            <div className='flex items-center w-full gap-2 pl-2 md:pl-0 md:gap-3 lg:px-2'>
                <span className='w-[50%] border border-[#EBBC61] h-[1%]'></span>
                <div className='max-w-[25%] md:max-w-[28%] opacity-80'>
                    <img src={Flower2} alt="flower2" />            
                </div>
                <span className='w-[50%] border border-[#EBBC61] h-[1%]'></span>
            </div>
            <div className='max-w-[15%] relative opacity-80 -right-4 md:max-w-[12%] md:-right-6 lg:max-w-[9%] lg:-right-8'>
                <img src={Flower3} alt="flower3" />
            </div>
        </div>
    </div>
  )
}

export default Border