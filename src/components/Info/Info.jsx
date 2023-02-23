import React from 'react'
import flower from './../../assets/imgae/flower.png'
import Pijat from './../../assets/imgae/pijat2.jpeg'
import Pijat2 from './../../assets/imgae/pijat.jpeg'
import Bahan from './../../assets/imgae/bahan.jpeg'

const Info = () => {
    const Pelayanan = [
        {
            id: 1,
            image: Pijat,
            desc: 'Pelayanan yang baik'
        },
        {
            id: 2,
            image: Pijat2,
            desc: 'Kesehatan yang baik'
        },
        {
            id: 3,
            image: Bahan,
            desc: 'Bahan yang alami'
        },
    ]

  return (
    <div className=' min-h-[35vh] max-h-[70vh] px-4 pt-2 flex flex-col gap-9 md:min-h-[40vh] md:max-h-[80vh] md:gap-12'>
        <div>
            <div className='relative flex justify-center'>
                <div className='absolute min-w-[45%] w-[35%] -top-3 md:min-w-[20%] md:max-w-[40%] md:w-[28%] lg:min-w-[5%] lg:w-[17%]'>
                    <img src={flower} alt='gambar flower' className='w-[100%] opacity-50'/>
                </div>
                <div className='z-10 flex flex-col items-center justify-center text-center mt-5 gap-1 md:w-[60%] md:mt-8 lg:w-[45%] lg:mt-12'>
                    <h1 className='text-2xl font-semibold md:text-4xl md:font-bold lg:text-3xl'>Welocome To Visit</h1>
                    <p className='text-sm tracking-wide text-black/85 md:text-xl lg:text-lg' >Setiap wanita diperlakukan dengan sangat hati-hati. Kami akan melayani apapun yang dibutuhkan untuk kecantikan anda.</p>
                </div>
            </div>
        </div>
        <div className='flex gap-5'>
            {Pelayanan.map((value,index) =>{
                return(
                <div key={index} className='flex items-center justify-center text-center flex-col gap-2'>
                    <div className='w-[85%] md:w-[68%] lg:w-[35%] relative flex items-center justify-center'>
                        <img src={value.image} alt={value.desc}  className='rounded-full'/>
                        {/* <div className='w-[95%] h-[95%] border-dotted border-4 border-[#F6DA77] absolute rounded-full'></div> */}
                    </div>
                    <p className='text-sm px-1 font-semibold tracking-wide md:text-xl lg:text-xl'>{value.desc}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Info