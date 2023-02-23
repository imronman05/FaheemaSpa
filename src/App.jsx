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

function App() {

  return (
    <Router className=''>
    <header>
        <Navigasi />
        <Hero />
    </header>
    <main className="relative mb-10">
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
