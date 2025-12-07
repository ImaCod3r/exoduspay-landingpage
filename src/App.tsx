import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Developers from './components/Developers';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Developers />
        <CallToAction />
      </main>
      <Footer />
    </ div>
  )
}

export default App
