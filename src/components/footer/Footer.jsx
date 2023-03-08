import React from 'react'
import Logo from './../../assets/imgae/logo.png'
import { BsWhatsapp,BsInstagram } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';


const Footer = () => {
  return (
    <div className='bg-[#E3C044]'>
        <div className='flex flex-col gap-6 md:flex-row md:justify-around px-4 md:px-10 lg:px-28 py-6'>
            <div className='flex items-center md:items-start w-[100%] md:w-[40%] lg:w-[11%]'>
                <div className='w-[35%] md:w-[100%]'>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='w-[100%] md:w-[100%] lg:w-[30%]'>
                <h3 className='text-black/50 font-semibold md:text-base lg:text-sm'>Address</h3>
                <div className='flex gap-2 mt-2 text-sm md:text-base lg:text-sm md:flex-col'>
                    <p className='text-sm w-[52%] md:w-full'>Jl. Raden Inten II No.86, RT.2/RW.7, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440</p>
                    <p>Senin - Minggu: 09:00 - 17:00.</p>
                </div>
            </div>
            <div className=''>
                <h3 className='text-black/50 font-semibold md:text-base lg:text-sm'>Support</h3>
                <ul className='flex gap-4 md:flex-col md:gap-2 mt-2 text-sm md:text-base lg:text-sm'>
                    <li>HOME</li>
                    <li>SERVICE</li>
                    <li>TREATMENTS</li>
                    <li>BOOKING</li>
                </ul>
            </div>
            <div className=''>
                <h3 className='text-black/50 font-semibold md:text-base lg:text-sm'>Follow Me</h3>
                <ul className='flex flex-col gap-2 mt-2 text-base'>
                    <li className='flex items-center gap-1'>
                        <BsWhatsapp /> 
                        <p>+62 811-1289-501</p>
                        </li>
                    <li className='flex items-center gap-1'>
                        <BsInstagram /> 
                        <p>@faheema spa</p>
                    </li>
                    <li className='flex items-center gap-1'>
                        <CgMail />
                        <p>faheemaspa@gmail.com</p>
                        </li>
                </ul>
            </div>
        </div>
        <div className='text-center py-2 border-t-2 border-slate-600/10 text-black/70'>
            <p>Copyright &copy;: 2023 <a href="https://github.com/imronman05">ImronMan05</a></p>
        </div>
    </div>
  )
}

export default Footer