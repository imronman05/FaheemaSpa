import { useEffect, useRef, useState } from "react";
import Navigasi from "./components/navbar/Navigasi";
import Hero from "./components/hero/Hero";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Info from "./components/Info/Info";
import Border from "./components/Border/Border";
import Service from "./components/Servic/Service";
import Treatments from "./components/Treatments/Treatments";
import Border2 from "./components/Border/Border2";
import Location from "./components/Location/Location";
import Boking from "./components/Boking/Boking";
import Footer from "./components/footer/Footer";
import Music from "./assets/music/musicSpa.mp3"
import { MdMusicNote, MdMusicOff } from 'react-icons/md';

// React Router DOM 


function App() {
  const [iconMusic,setIconMusic] = useState(false)
  const [MusicSpa] = useState(Music)
  const [navbar, setNavbar] = useState('fixed w-full')
  const musicRef = useRef(new Audio(Music))

  window.onscroll = () =>{
    if(window.pageYOffset > 0){
      setNavbar('fixed w-full bg-[#a88f3f] z-20 transition-all duration-300')
    }else{
      setNavbar('fixed w-full transition-all duration-300')
    }
  }

  const musicPlay = () =>{
    const audio = musicRef.current
    audio.volume = 100

    if(!iconMusic){
      setIconMusic(true)
      audio.play()
    }else{
      setIconMusic(false)
      audio.pause()
    }
  } 
  return (
    <Router className=''>
      <div className="fixed right-0 top-28 cursor-pointer z-30" id="PlayMusic" onClick={musicPlay}>
        <div className='text-3xl bg-black/30 rounded-full p-2 cursor-pointer text-white/70'>
          <audio ref={musicRef} src={MusicSpa} loop={true} />
          {iconMusic ? 
            <MdMusicNote />
            :
            <MdMusicOff />
            }
        </div>
      </div>
    <header>
      <div className={navbar}>
        <Navigasi />
      </div>
        <Hero />
    </header>
    <main className="relative mb-10 -z-10">
      <Info />
      <Border />
      <Service />
      <Border2 />
      <Location />
      <Border2 />
      <Treatments />
      <Border2 />
      <Boking />
    </main>
    <footer>
      <Footer />
    </footer>
    </Router>
  )
}

export default App
