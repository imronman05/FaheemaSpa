import React,{useState} from 'react'
import { Link } from 'react-router-dom'
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
    <div className='flex w-[100%] flex-col p-3 md:px-8 md:flex-row z-10'>
        <div className='flex items-center justify-between md:items-start md:h-fit'>
            <Link to="/">
                <img src={logo} alt="Logo D'nurs" className='w-[25%] md:w-[35%] '/>
            </Link>
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
            <div>
                <ul className='flex flex-col gap-10 text-white/40 font-semibold md:flex-row text-[90%] md:text-lg lg:text-base'>
                    <Link className='hover:text-[#ffcd39] active:text-[#ffcd39] transition duration-300'>HOME</Link>
                    <Link className='hover:text-[#ffcd39] active:text-[#ffcd39] transition duration-300'>SERVICE</Link>
                    <Link className='hover:text-[#ffcd39] active:text-[#ffcd39] transition duration-300'>TREATMENT</Link>
                    <Link className='hover:text-[#ffcd39] active:text-[#ffcd39] transition duration-300'>BOOKING</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigasi