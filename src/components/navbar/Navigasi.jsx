import React,{useState} from 'react'
import {Link as LinkScroll} from 'react-scroll/modules'
import logo from '../../assets/imgae/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';

const Navigasi = () => {
    const [togle, setTogle] = useState(false);
    const [showTogle, setShowTogle] = useState('toggle ')

    const hamburgerMenu = () =>{
        if(!togle){
            setShowTogle('toggle -right-0 inline-block')
            setTogle(!togle)
        }else{
            setShowTogle('toggle -right-full')
            setTogle(!togle)
        }
    }

  return (
    <div className='flex w-[100%] justify-between items-center flex-col p-3 md:px-8 md:flex-row'>
        <div className='flex items-center justify-between md:items-start md:h-fit'>
            <LinkScroll to='hero' smooth={true} offset={0} duration={500} className='cursor-pointer'>
                <img src={logo} alt="Logo D'nurs" className='w-[25%] md:w-[35%] '/>
            </LinkScroll>
            <div className='text-3xl cursor-pointer md:hidden' onClick={hamburgerMenu}>
                <RxHamburgerMenu />
            </div>
        </div>
        <div className={showTogle}>
            <div className='relative flex justify-end mb-5 md:hidden'>
                <div className='text-3xl cursor-pointer' onClick={hamburgerMenu}>
                    <GrClose />
                </div>
            </div>
            <div className=''>
                <ul className='flex flex-col gap-10 text-white/40 font-semibold md:flex-row text-[90%] md:text-lg lg:text-base'>
                    <LinkScroll activeClass='text-[#ffcd39]' spy={true} to='hero' smooth={true} offset={0} duration={500} className='hover:text-[#ffcd39]  transition duration-300 cursor-pointer'>HOME</LinkScroll>
                    <LinkScroll activeClass='text-[#ffcd39]' spy={true} to='service' smooth={true} offset={-190} duration={500} className='hover:text-[#ffcd39] transition duration-300 cursor-pointer'>SERVICE</LinkScroll>
                    <LinkScroll activeClass='text-[#ffcd39]' spy={true} to='treatment' smooth={true} offset={-190} duration={500} className='hover:text-[#ffcd39] transition duration-300 cursor-pointer'>TREATMENT</LinkScroll>
                    <LinkScroll activeClass='text-[#ffcd39]' spy={true} to='booking' smooth={true} offset={-190} duration={500} className='hover:text-[#ffcd39] transition duration-300 cursor-pointer'>BOOKING</LinkScroll>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigasi