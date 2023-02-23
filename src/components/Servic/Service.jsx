import React from 'react'
import Face from './../../assets/imgae/pijat.jpeg';
import Body from './../../assets/imgae/body.jpeg';
import WomenArea from './../../assets/imgae/area.jpeg'

const Service = () => {
    const servie = [
        {
            id: 1,
            image: Face,
            desc: 'Service Face'
        },
        {
            id: 2,
            image: Body,
            desc: 'Service Body'
        },
        {
            id: 3,
            image: WomenArea,
            desc: 'Service Area'
        },
    ]

  return (
    <div className='flex flex-col items-center px-4 gap-3 md:px-10 md:gap-5 lg:gap-7'>
        <h1 className='text-2xl font-semibold md:text-4xl lg:text-3xl'>Service</h1>
        <div className='flex gap-5 text-center'>
            {servie.map((value, index) =>{
                return(
                    <div key={index} className='flex flex-col justify-center items-center md:gap-2'>
                        <div className='w-[90%] md:w-[80%] lg:w-[53%] relative flex items-center justify-center'>
                            <img src={value.image} alt={value.desc} className='rounded-full'/>
                            {/* <div className='w-[99%] h-[99%] border-solid border-2 border-[#F6DA77] absolute rounded-full'></div> */}
                        </div>
                        <p className='text-sm px-1 font-semibold tracking-wide md:text-2xl lg:text-xl'>{value.desc}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Service