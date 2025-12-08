import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portals from './components/Portals';
import Features from './components/Features';
import About from './components/About';
import HealthMonitoring from './components/HealthMonitoring';
import Creator from './components/Creator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Portals />
      <Features />
      <About />
      <HealthMonitoring />
      <Creator />
      <Footer />
    </div>
  );
}

export default App;
