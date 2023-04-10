 import React, { useState } from 'react';
 import TestBackground from './../../assets/imgae/test2.png';

const Boking = () => {
    const [booking,setBooking] = useState({
        nama: '',
        tanggal: '',
        jam: '',
        telpon: '',
        pesan: ''
    })
    const [clock,setClock] = useState('w-full focus:outline-none rounded-lg p-1')
    const [close,setClose] = useState(false)
    const classButton = 'bg-[#c48c1c] py-2 px-7 rounded-xl text-white w-[35%] focus:bg-[#eca71ce0] transition duration-300 md:px-8 lg:px-10'
    const disabledDate = () =>{
        let date = new Date();
        let day = date.getDate();
        let mounth = date.getMonth() + 1;
        let year = date.getFullYear();
        if(day < 10){
            day = '0'+day
        }if(mounth < 10){
            mounth = '0'+mounth
        }
        return year+'-'+mounth+'-'+day
    }

    const onChange1 = (e) =>{
        if(e.target.value < '09:00' || e.target.value > '17:00'){
            console.log('sudah tutup')
            setClock('w-full focus:outline-none rounded-lg p-1 border-2 text-pink-600 border-pink-500')
            setClose(true)
        }else{
            console.log('masih buka')
            setClock('w-full focus:outline-none rounded-lg p-1 ')
            setClose(false)
        }
    }

    const onChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setBooking({...booking, [name]: value})

        if(name == 'jam'){
            if(value < '09:00' || value > '17:00'){
                setClock('w-full focus:outline-none rounded-lg p-1 border-2 text-pink-600 border-pink-500')
                setClose(true)
            }else{
                setClock('w-full focus:outline-none rounded-lg p-1 ')
                setClose(false)
            }
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <div className='' id='booking'>
    <h1 className='text-center text-3xl font-semibold'>Booking</h1>
    <div className='grid md:grid-cols-2 px-4 md:px-10 lg:px-28 p-3'>
        <div className='bg-[#e3c044] rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl flex items-center justify-center relative'>
            <form action="" className=' flex flex-col gap-2 w-[100%] lg:w-[80%] p-8 z-10' onSubmit={onSubmit}>
                <div className=''>
                    <label htmlFor="">Nama</label>
                    <input type="text" name='nama' className='w-full focus:outline-none rounded-lg p-1' onChange={onChange}/>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className=''>
                        <label htmlFor="">tanggal</label>
                        <input type="date" name='tanggal' min={disabledDate()} className='w-full focus:outline-none rounded-lg p-1' onChange={onChange}/>
                    </div>
                    <div className='relative'>
                        <label htmlFor="">Jam</label>
                        <input type="time" className={clock} onChange={onChange} name='jam'/>
                        {close &&
                        <p class="absolute text-pink-600 text-sm font-bold lg:top-14 left-1">
                            Tempat tutup
                        </p>
                        }
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="">No Telpon</label>
                    <input type="number" className='w-full focus:outline-none rounded-lg p-1' name='telpon' onChange={onChange}/>
                </div>
                <div className=''>
                    <label htmlFor="">Pesan</label>
                    <textarea id="" className='w-full resize-none focus:outline-none rounded-lg p-1' name='pesan' onChange={onChange}></textarea>
                </div>
                <div className='text-center'>
                    {close ? 
                    <a className={classButton} disabled>Send</a>
                    :
                    <a href={`https://api.whatsapp.com/send?phone=8111289501&text=${`Nama:${booking.nama} Telpon: ${booking.telpon} Tanggal: ${booking.tanggal} Jam: ${booking.jam} Pesan: ${booking.pesan}`}`} target='_blank' className={classButton} >Send</a>
                    }
                </div>
            </form>
            <div className='absolute bottom-0 w-full h-full opacity-80'>
            <div className='w-[100%] h-[100%] bg-35% md:bg-40% lg:bg-30% bg-bottom bg-repeat-x' style={{backgroundImage: `url('${TestBackground}')`}}>
            </div>
            </div>
        </div>
        <div className='rounded-bl-xl rounded-br-xl overflow-hidden md:rounded-bl-none md:rounded-tr-xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.132309425793!2d106.91788251404431!3d-6.246289662898825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698da7ea47826b%3A0xb7a28872ab769fd3!2sD&#39;Nurs!5e0!3m2!1sid!2sid!4v1676955312868!5m2!1sid!2sid" width="100%" height="390" style={{border:0}} loading="lazy" ></iframe>
        </div>
    </div>
    </div>
  )
}

export default Boking