 import React from 'react'
//  Mobile & Tab Belom responsive

const Boking = () => {
  return (
    <div className=''>
    <h1 className='text-center text-3xl font-semibold'>Kontak kami</h1>
    <div className='grid md:grid-cols-2 px-4 md:px-10 lg:px-28 p-3'>
        <div className='bg-[#e3c044] rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl flex items-center justify-center'>
            <form action="" className=' flex flex-col gap-2 w-[100%] lg:w-[80%] p-8'>
                {/* <p className='text-center'>Silahkan isi form berikut untuk melakukan pelayanan kami</p> */}
                <div className=''>
                    <label htmlFor="">Nama</label>
                    <input type="text" className='w-full focus:outline-none rounded-lg p-1'/>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className=''>
                        <label htmlFor="">tanggal</label>
                        <input type="date" className='w-full focus:outline-none rounded-lg p-1'/>
                    </div>
                    <div className=''>
                        <label htmlFor="">Jam</label>
                        <input type="time" className='w-full focus:outline-none rounded-lg p-1'/>
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="">No Telpon</label>
                    <input type="number" className='w-full focus:outline-none rounded-lg p-1'/>
                </div>
                <div className=''>
                    <label htmlFor="">Pesan</label>
                    <textarea name="" id="" className='w-full resize-none focus:outline-none rounded-lg p-1'></textarea>
                </div>
                <div className='text-center'>
                    <button className='bg-[#c48c1c] py-2 rounded-xl text-white w-[35%] hover:bg-[#eca71ce0] transition duration-300'>Send</button>
                </div>
            </form>
        </div>
        <div className='rounded-bl-xl rounded-br-xl overflow-hidden md:rounded-bl-none md:rounded-tr-xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.132309425793!2d106.91788251404431!3d-6.246289662898825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698da7ea47826b%3A0xb7a28872ab769fd3!2sD&#39;Nurs!5e0!3m2!1sid!2sid!4v1676955312868!5m2!1sid!2sid" width="100%" height="390" style={{border:0}} loading="lazy" ></iframe>
        </div>
    </div>
    </div>
  )
}

export default Boking