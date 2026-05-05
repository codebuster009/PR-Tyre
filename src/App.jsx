import AmbientBackdrop from './components/AmbientBackdrop.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import EmergencyBanner from './components/EmergencyBanner.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Brands from './components/Brands.jsx';
import LiveChatPill from './components/LiveChatPill.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative">
      <AmbientBackdrop />
      <Navbar />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <WhyUs />
        <Brands />
      </main>
      <Footer />
      <LiveChatPill />
    </div>
  );
}
