import LogoFaheema from './../../assets/imgae/fahema1.png'
import background from './../../assets/imgae/bg.svg'


const Hero = () => {
  return (
    <div id='hero'>
      <div style={{backgroundImage: `url('${background}')`}} className='bg-cover bg-center bg-no-repeat min-h-[80vh] h-[80vh] md:bg-right-top lg:h-[100vh] lg:bg-lg'>
        <div className='h-[90%] flex flex-col justify-center px-7 gap-2 md:px-12 md:w-[80%] lg:w-[55%] lg:mx-20'>
          <div className='flex justify-center lg:pr-16'>
            <img src={LogoFaheema} alt="Logo Faheema Spa" className='w-[80%] md:w-[70%] lg:w-[70%]'/>
          </div>
          <p className='text-sm text-[#cea11b] tracking-wide leading-relaxed md:text-xl lg:text-xl'>Perawatan tubuh yang terdiri dari berbagai jenis dan tahapan perawatan. Tidak hanya untuk kecantikan, kita juga bisa membantu merilekskan tubuh sehingga kebugaran tubuh meningkat. Tujuannya adalah untuk menyegarkan pikiran.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero